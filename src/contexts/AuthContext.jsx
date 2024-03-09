import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [infoUserName, setInfoUserName] = useState();
  const [infoUserEmail, setInfoUserEmail] = useState();
  const [infoUserId, setInfoUserId] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageUser && storageToken) {
        const obj = JSON.parse(storageUser);
        setUser(storageUser);
        const userName = obj.name;
        const userEmail = obj.email;
        const userId = obj.id;

        setInfoUserName(userName);
        setInfoUserEmail(userEmail);
        setInfoUserId(userId);
      }
    };

    loadingStoreData();
    setLoading(false);
  }, []);

  async function signIn({ email, password }) {
    const info = {
      email,
      password,
    };

    const response = await api.post("/login", info);

    if (response.error) {
      alert(response.error);
    }

    setInfoUserName(response.data.name);
    setInfoUserEmail(response.data.email);
    setInfoUserId(response.data.id);
    setUser(response.data);
    console.log(response.data.user);
    localStorage.setItem("@Auth:user", JSON.stringify(response.data.user.id));
    localStorage.setItem("@Auth:token", response.data.token);
  }

  if (loading) {
    return <h1>Loading....</h1>;
  }

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("@Auth:token");
    localStorage.removeItem("@Auth:user");
    return navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        infoUserName,
        infoUserEmail,
        infoUserId,
        signed: !!user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";
import UsersService from "../services/UsersService";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [infoUserName, setInfoUserName] = useState();
  const [infoUserEmail, setInfoUserEmail] = useState();
  const [infoUserId, setInfoUserId] = useState();
  const [loading, setLoading] = useState(true);

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

    const response = await UsersService.authUser(info);

    if (response.error) {
      alert(response.error);
    }

    setInfoUserName(response.user.name);
    setInfoUserEmail(response.user.email);
    setInfoUserId(response.user.id);
    setUser(response.user);
    localStorage.setItem("@Auth:token", response.token);
    localStorage.setItem("@Auth:user", JSON.stringify(response.user));
  }

  if (loading) {
    return <h1>Loading....</h1>;
  }

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("@Auth:token");
    localStorage.removeItem("@Auth:user");
    return <Navigate to="/" />;
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

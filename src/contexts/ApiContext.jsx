import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

export const ApiContext = createContext({});

function ApiProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [getUser, setGetUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { user } = useContext(AuthContext);

  const loadUser = useCallback(async () => {
    try {
      const response = await api.get(`/user/${user}`);
      setGetUser(response.data);
      setProdutos(response.data.Products);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const product = useMemo(
    () => ({
      products,
      produtos,
      isLoading,
      loadUser,
      hasError,
      getUser,
    }),
    [products, produtos, isLoading, loadUser, hasError, getUser]
  );

  return <ApiContext.Provider value={product}>{children}</ApiContext.Provider>;
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;

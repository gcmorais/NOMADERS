import React, {
  createContext, useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import ProductsServices from '../services/ProductsService';

export const ApiContext = createContext({});

function ApiProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadProducts = useCallback(async () => {
    try {
      const productList = await ProductsServices.listProducts();
      setProducts(productList);
      console.log(productList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const product = useMemo(
    () => ({
      products, isLoading, loadProducts, hasError,
    }),
    [products, isLoading, loadProducts, hasError],
  );

  return (
    <ApiContext.Provider value={product}>
      {children}
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;

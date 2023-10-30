import React, {
  createContext, useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import ProductsServices from '../services/ProductsService';

export const ApiContext = createContext({});

function ApiProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadProducts = useCallback(async () => {
    try {
      const productList = await ProductsServices.listProducts();
      setProducts(productList);
      setIsLoading(false);
    } catch (error) {
      console.log('Caiu no catch', error);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const product = useMemo(
    () => ({ products, isLoading, loadProducts }),
    [products, isLoading, loadProducts],
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

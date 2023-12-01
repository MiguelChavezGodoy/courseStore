import { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const useInitialState = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const fetchData = () => axios(API);
    const response = await fetchData();
    setProducts(response.data);
  }, []);

  return {
    products,
  };
};

export default useInitialState;

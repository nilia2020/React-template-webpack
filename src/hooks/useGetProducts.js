import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios(API);
      setProducts(response.data);
    }
    fetchProduct();
  }, []);
  return products;
};

export default useGetProducts;

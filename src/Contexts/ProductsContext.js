import { createContext } from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const ProductsContext = createContext(null);

function ProductsProvider({ children }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        setdata(response.data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider value={{ data }}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
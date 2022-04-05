import { createContext } from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const ProductsContext = createContext(null);

function ProductsProvider({ children }) {
  const [data, setdata] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const productResponse = await axios.get("/api/products");
        setdata(productResponse.data.products);
        const categoryResponse = await axios.get("/api/categories");
        setCategoryData(categoryResponse.data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider value={{ data, categoryData }}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };

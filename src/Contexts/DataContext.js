import { toast } from "react-toastify";
import { createContext } from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const DataContext = createContext(null);

function DataProvider({ children }) {
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
        toast.error("Failed To Fetch Data");
      }
    })();
  }, []);

  return <DataContext.Provider value={{ data, categoryData }}>{children}</DataContext.Provider>;
}

const useData = () => useContext(DataContext);

export { useData, DataProvider };

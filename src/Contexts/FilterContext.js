import { createContext, useContext, useReducer } from "react";
import { useProducts } from "./ProductsContext";
import { Reducer } from "../Reducers/FilterReducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const { data } = useProducts();

  const [state, dispatch] = useReducer(Reducer, {
    searchProdcut: "",
    sortbyprice: "",
    showManTshirt: false,
    showWomenTshirt: false,
    showKidsTshirt: false,
    showFamilyTshirt: false,
    sortbyrating: "",
    sortbyrange: "",
  });

  const searchProduct = (data, sortBy) => {
    let filteredList = data;
    if (sortBy) {
      return filteredList.filter((item) =>
        item.title.toLowerCase().match(sortBy.toLowerCase())
      );
    }
    return filteredList;
  };

  const sortbyprice = (data, sortBy) => {
    let filteredList = data;
    if (sortBy) {
      if (sortBy === "0")
        return filteredList.filter((item) => (item.price <= 0 ? true : false));

      if (sortBy === "200")
        return filteredList.filter((item) =>
          item.price <= 200 ? true : false
        );

      if (sortBy === "400")
        return filteredList.filter((item) =>
          item.price <= 400 ? true : false
        );

      if (sortBy === "600")
        return filteredList.filter((item) =>
          item.price <= 600 ? true : false
        );

      if (sortBy === "800")
        return filteredList.filter((item) =>
          item.price <= 800 ? true : false
        );

      return filteredList;
    }
    return filteredList;
  };

  const sortbycategory = (data, sortBy) => {
    let filteredList = data;
    if (
      sortBy.showManTshirt ||
      sortBy.showWomenTshirt ||
      sortBy.showKidsTshirt ||
      sortBy.showFamilyTshirt
    ) {
      const ManCategory = filteredList.reduce(
        (pre, curr) =>
          state.showManTshirt && curr.categoryName === "Man"
            ? [...pre, curr]
            : [...pre],
        []
      );
      const WomenCategory = filteredList.reduce(
        (pre, curr) =>
          state.showWomenTshirt && curr.categoryName === "Women"
            ? [...pre, curr]
            : [...pre],
        ManCategory
      );
      const KidsCategory = filteredList.reduce(
        (pre, curr) =>
          state.showKidsTshirt && curr.categoryName === "Kids"
            ? [...pre, curr]
            : [...pre],
        WomenCategory
      );
      const FamilyCategory = filteredList.reduce(
        (pre, curr) =>
          state.showWomenTshirt && curr.categoryName === "Family"
            ? [...pre, curr]
            : [...pre],
        KidsCategory
      );
      return FamilyCategory;
    }
    return filteredList;
  };

  const sortbyrating = (data, sortBy) => {
    let filteredList = data;
    if (sortBy) {
      if (sortBy === "4STAR")
        return filteredList.filter((item) => (item.Rating >= 4 ? true : false));

      if (sortBy === "3STAR")
        return filteredList.filter((item) => (item.Rating >= 3 ? true : false));

      if (sortBy === "2STAR")
        return filteredList.filter((item) => (item.Rating >= 2 ? true : false));

      if (sortBy === "1STAR")
        return filteredList.filter((item) => (item.Rating >= 1 ? true : false));

      return filteredList;
    }
    return filteredList;
  };

  const sortbyrange = (data, sortBy) => {
    let filteredList = data;
    if (sortBy) {
      if (sortBy === "LOW_TO_HIGH")
        return filteredList.sort((a, b) => a.price - b.price);

      if (sortBy === "HIGH_TO_LOW")
        return filteredList.sort((a, b) => b.price - a.price);

      return filteredList;
    }
    return filteredList;
  };

  const SearchedList = searchProduct(data, state.searchProdcut);
  const sortBypriceList = sortbyprice(SearchedList, state.sortbyprice);
  const sortByCategoryList = sortbycategory(sortBypriceList, state);
  const sortByRatingList = sortbyrating(sortByCategoryList, state.sortbyrating);
  const updatedList = sortbyrange(sortByRatingList, state.sortbyrange);

  return (
    <FilterContext.Provider value={{ state, dispatch, updatedList }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };

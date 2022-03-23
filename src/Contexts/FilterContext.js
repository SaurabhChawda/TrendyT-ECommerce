import { createContext, useContext, useReducer } from "react";
import { useProducts } from "./ProductsContext";
import { Reducer } from "../Reducer/FilterReducer";
import {
  SearchProduct,
  SortByPrice,
  SortByCategory,
  SortByRating,
  SortByRange,
} from "../Pages/ProductPage/Components/FilteredData/index";

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

  // const SearchedList = SearchProduct(data, state.searchProdcut);
  // const sortBypriceList = SortByPrice(SearchedList, state.sortbyprice);
  // const sortByCategoryList = SortByCategory(sortBypriceList, state);
  // const sortByRatingList = SortByRating(sortByCategoryList, state.sortbyrating);
  // const updatedList = SortByRange(sortByRatingList, state.sortbyrange);

  const updatedList = SortByRange(
    SortByRating(
      SortByCategory(
        SortByPrice(
          SearchProduct(data, state.searchProdcut),
          state.sortbyprice
        ),
        state
      ),
      state.sortbyrating
    ),
    state.sortbyrange
  );

  return (
    <FilterContext.Provider value={{ state, dispatch, updatedList }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };

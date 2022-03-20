const Reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      return { ...state, searchProdcut: action.payload };
    case "SORT_BY_RANGE":
      return { ...state, sortbyrange: action.payload };
    case "SORT_BY_RATING":
      return { ...state, sortbyrating: action.payload };
    case "SORT_BY_PRICE":
      return { ...state, sortbyprice: action.payload };
    case "Show_Man_Tshirt":
      return { ...state, showManTshirt: !state.showManTshirt };
    case "Show_Women_Tshirt":
      return { ...state, showWomenTshirt: !state.showWomenTshirt };
    case "Show_Kids_Tshirt":
      return { ...state, showKidsTshirt: !state.showKidsTshirt };
    case "Show_Family_Tshirt":
      return { ...state, showFamilyTshirt: !state.showFamilyTshirt };
    case "CLEAR":
      return {
        ...state,
        searchproduct: "",
        sortbyprice: "",
        sortbyrating: "",
        sortbyrange: "",
        showManTshirt: false,
        showWomenTshirt: false,
        showKidsTshirt: false,
        showFamilyTshirt: false,
      };
  }
};
export { Reducer };

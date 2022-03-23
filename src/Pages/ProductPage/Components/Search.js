import { useFilter } from "../../../Contexts/FilterContext";
export function Search() {
  const {dispatch} = useFilter()
  return (
    <>
      <input
        className="sidebar__input--search"
        type="search"
        placeholder="Search Product"
        onChange={(e)=>dispatch({type:"SEARCH_PRODUCT",payload:e.target.value,})}
      />
    </>
  );
}

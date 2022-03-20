import { useFilter } from "../../../Contexts/FilterContext";
export function SortByRange() {
  const { dispatch } = useFilter();
  return (
    <div className="sidebar--filter sidebar--sortBy-filter">
      <h2>Sort by</h2>
      <ul className="sidebar__list sidebar__list--sortBy-filter">
        <li className="sidebar__item sidebar__item--sortBy-filter">
          <input
            onChange={() =>
              dispatch({ type: "SORT_BY_RANGE", payload: "LOW_TO_HIGH" })
            }
            className="sidebar__input"
            type="radio"
            name="Sorting"
          />
          <label htmlFor="sortBy Filter">Price - Low to high</label>
        </li>
        <li className="sidebar__item sidebar__item--sortBy-filter">
          <input
            onChange={() =>
              dispatch({ type: "SORT_BY_RANGE", payload: "HIGH_TO_LOW" })
            }
            className="sidebar__input"
            type="radio"
            name="Sorting"
          />
          <label htmlFor="sortBy Filter">price - High to Low</label>
        </li>
      </ul>
    </div>
  );
}

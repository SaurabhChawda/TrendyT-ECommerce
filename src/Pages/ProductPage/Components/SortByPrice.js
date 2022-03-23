import { useFilter } from "../../../Contexts/FilterContext";

export const SortByPrice = () => {
  const { state, dispatch } = useFilter();
  return (
    <div className="sidebar--filter sidebar--filter-price">
      <h2>Price</h2>
      <div className="sidebar--price-filter">
        <span className="sidebar--price-filter-initial-value">0</span>
        <input
          className="sidebar--price__range"
          type="range"
          min={0}
          max={800}
          step={200}
          onChange={(e) =>
            dispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
          }
        />
        <span className="sidebar--price-filter-max-value">800</span>
      </div>
    </div>
  );
};

import { useFilter } from "../../../Contexts/Index";

export const ClearFilter = () => {
  const { dispatch } = useFilter();
  return (
    <div className="sidebar__btn">
      <button
        className="sidebar__btn--clear-filter"
        onClick={() => dispatch({ type: "CLEAR" })}
      >
        Clear Filter
      </button>
    </div>
  );
};

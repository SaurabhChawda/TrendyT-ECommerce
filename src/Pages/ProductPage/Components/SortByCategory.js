import { useFilter } from "../../../Contexts/Index";

export const SortByCategory = () => {
  const { state, dispatch } = useFilter();
  return (
    <div className="sidebar--filter sidebar--category-filter">
      <h2>Category</h2>
      <ul className="sidebar__list sidebar__list--category-filter">
        <li className="sidebar__item sidebar__item--category-filter">
          <input
            className="sidebar__input"
            type="checkbox"
            checked={state.showManTshirt}
            onChange={() => dispatch({ type: "Show_Man_Tshirt" })}
          />
          <label htmlFor="category Filter">Man T-Shirt</label>
        </li>
        <li className="sidebar__item sidebar__item--category-filter">
          <input
            className="sidebar__input"
            type="checkbox"
            checked={state.showWomenTshirt}
            onChange={() => dispatch({ type: "Show_Women_Tshirt" })}
          />
          <label htmlFor="category Filter">Women T-Shirt</label>
        </li>
        <li className="sidebar__item sidebar__item--category-filter">
          <input
            className="sidebar__input"
            type="checkbox"
            checked={state.showKidsTshirt}
            onChange={() => dispatch({ type: "Show_Kids_Tshirt" })}
          />
          <label htmlFor="category Filter">Kid T-Shirt</label>
        </li>
        <li className="sidebar__item sidebar__item--category-filter">
          <input
            className="sidebar__input"
            type="checkbox"
            checked={state.showFamilyTshirt}
            onChange={() => dispatch({ type: "Show_Family_Tshirt" })}
          />
          <label htmlFor="category Filter">Family T-Shirt</label>
        </li>
      </ul>
    </div>
  );
};

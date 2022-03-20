import { useFilter } from "../../../Contexts/FilterContext";

export const SortByRating = () => {
  const { dispatch } = useFilter();
  return (
    <div className="sidebar--filter sidebar--rating-filter">
      <h2>Rating</h2>
      <ul className="sidebar__list sidebar__list--rating-filter">
        <li className="sidebar__item sidebar__item--rating-filter">
          <input
            className="sidebar__input"
            type="radio"
            name="Rating"
            onChange={() =>
              dispatch({ type: "SORT_BY_RATING", payload: "4STAR" })
            }
          />
          <label htmlFor="rating Filter">4 Star &amp; above</label>
        </li>
        <li className="sidebar__item sidebar__item--rating-filter">
          <input
            className="sidebar__input"
            type="radio"
            name="Rating"
            onChange={() =>
              dispatch({ type: "SORT_BY_RATING", payload: "3STAR" })
            }
          />
          <label htmlFor="rating Filter">3 Star &amp; above</label>
        </li>
        <li className="sidebar__item sidebar__item--rating-filter">
          <input
            className="sidebar__input"
            type="radio"
            name="Rating"
            onChange={() =>
              dispatch({ type: "SORT_BY_RATING", payload: "2STAR" })
            }
          />
          <label htmlFor="rating Filter">2 Star &amp; above</label>
        </li>
        <li className="sidebar__item sidebar__item--rating-filter">
          <input
            className="sidebar__input"
            type="radio"
            name="Rating"
            onChange={() =>
              dispatch({ type: "SORT_BY_RATING", payload: "1STAR" })
            }
          />
          <label htmlFor="rating Filter">1 Star &amp; above</label>
        </li>
      </ul>
    </div>
  );
};
import "./product.css";
import "./product-Responsive.css";
import { Nav } from "../../components/Nav/Nav";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile";
import { Footer } from "../../components/Footer/Footer";

export function Product() {
  return (
    <div className="product-page">
      <Nav />
      <NavForMobile />
      <div className="sidebar">
        <div>
          <input
            className="sidebar__input--search"
            type="text"
            placeholder="Search Product"
          />
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
              />
              <span className="sidebar--price-filter-max-value">800</span>
            </div>
          </div>
          <div className="sidebar--filter sidebar--category-filter">
            <h2>Category</h2>
            <ul className="sidebar__list sidebar__list--category-filter">
              <li className="sidebar__item sidebar__item--category-filter">
                <input className="sidebar__input" type="checkbox" />
                <label htmlFor="category Filter">Man T-Shirt</label>
              </li>
              <li className="sidebar__item sidebar__item--category-filter">
                <input className="sidebar__input" type="checkbox" />
                <label htmlFor="category Filter">Women T-Shirt</label>
              </li>
              <li className="sidebar__item sidebar__item--category-filter">
                <input className="sidebar__input" type="checkbox" />
                <label htmlFor="category Filter">Kid T-Shirt</label>
              </li>
              <li className="sidebar__item sidebar__item--category-filter">
                <input className="sidebar__input" type="checkbox" />
                <label htmlFor="category Filter">Family T-Shirt</label>
              </li>
            </ul>
          </div>
          <div className="sidebar--filter sidebar--rating-filter">
            <h2>Rating</h2>
            <ul className="sidebar__list sidebar__list--rating-filter">
              <li className="sidebar__item sidebar__item--rating-filter">
                <input className="sidebar__input" type="radio" name="Rating" />
                <label htmlFor="rating Filter">4 Star &amp; above</label>
              </li>
              <li className="sidebar__item sidebar__item--rating-filter">
                <input className="sidebar__input" type="radio" name="Rating" />
                <label htmlFor="rating Filter">3 Star &amp; above</label>
              </li>
              <li className="sidebar__item sidebar__item--rating-filter">
                <input className="sidebar__input" type="radio" name="Rating" />
                <label htmlFor="rating Filter">2 Star &amp; above</label>
              </li>
              <li className="sidebar__item sidebar__item--rating-filter">
                <input className="sidebar__input" type="radio" name="Rating" />
                <label htmlFor="rating Filter">1 Star &amp; above</label>
              </li>
            </ul>
          </div>
          <div className="sidebar--filter sidebar--sortBy-filter">
            <h2>Sort by</h2>
            <ul className="sidebar__list sidebar__list--sortBy-filter">
              <li className="sidebar__item sidebar__item--sortBy-filter">
                <input className="sidebar__input" type="radio" name="Sorting" />
                <label htmlFor="sortBy Filter">Price - Low to high</label>
              </li>
              <li className="sidebar__item sidebar__item--sortBy-filter">
                <input className="sidebar__input" type="radio" name="Sorting" />
                <label htmlFor="sortBy Filter">price - High to Low</label>
              </li>
            </ul>
          </div>
          <div className="sidebar__btn">
            <button className="sidebar__btn--clear-filter">Clear Filter</button>
          </div>
        </div>
      </div>
      <main></main>
      <Footer />
    </div>
  );
}

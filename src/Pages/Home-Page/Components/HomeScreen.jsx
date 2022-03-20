import { NavLink } from "react-router-dom";
export const HomeScreen = () => {
  return (
    <section className="home home-wrapper">
      <h1 className="home-wrapper__title">TRENDY-T</h1>
      <h2 className="home-wrapper__subtitle">CUSTOM PRINTED T-SHIRTS</h2>
      <p className="home-wrapper__content">
        Wear trendy, funky, stylish T-Shirts.
      </p>
      <p className="home-wrapper__text">"What you Wear is What you are."</p>
      <NavLink to="/products">
        <button className="home__btn">Shop Now</button>
      </NavLink>
    </section>
  );
};

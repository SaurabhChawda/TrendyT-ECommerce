import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/image/HomePage-Images/Trendy-T Logo.png";
import cart from "../../assets/image/HomePage-Images/cart.png";
import wishList from "../../assets/image/HomePage-Images/Wishlist.png";
import Login from "../../assets/image/HomePage-Images/Login.png";

export function Nav() {
  return (
    <div>
      {/* Navigation Bar Desktop */}
      <nav className="nav-bar nav-bar--simple">
        <nav className="nav-bar--logo">
          <NavLink to="/">
            <img className="nav-bar__img--logo" src={Logo} alt="Trendy-T" />
          </NavLink>
        </nav>
        <ul className="nav-bar__list">
          <li>
            <NavLink to="/" className="nav-bar__item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products/" className="nav-bar__item">
              Product
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink to="/wishlist/">
              <img
                className="nav-bar__img--icon nav-bar__img--wishlist"
                src={wishList}
                alt="Wishlist"
              />
            </NavLink>
          </li>
          <li className="nav-bar__item badge__wrapper">
            <NavLink to="/cart/">
              <img
                src={cart}
                alt="cart-badge"
                className="nav-bar__img--icon nav-bar__img--cart badge__icon--img"
              />
            </NavLink>
            <span className="badge__icon--primary badge--logo ">1</span>
          </li>
          <li className="nav-bar__item">
            <NavLink to="/login/">
              <img
                className="nav-bar__img--icon nav-bar__img--login"
                src={Login}
                alt="Login/Sign-Up"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

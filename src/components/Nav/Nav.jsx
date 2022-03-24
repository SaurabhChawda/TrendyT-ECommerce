import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../../Contexts/UserContext";

export function Nav() {
  const { state } = useUser();
  return (
    <div>
      {/* Navigation Bar Desktop */}
      <nav className="nav-bar nav-bar--simple">
        <nav className="nav-bar--logo">
          <NavLink to="/">
            <img
              className="nav-bar__img--logo"
              src="/assets/image/HomePage-Images/Trendy-T Logo.png"
              alt="Trendy-T"
            />
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
          <li className="nav-bar__item badge__wrapper">
            <NavLink to="/wishlist/">
              <img
                className="nav-bar__img--icon nav-bar__img--wishlist"
                src="/assets/image/HomePage-Images/Wishlist.png"
                alt="Wishlist"
              />
            </NavLink>
            {state.wishlist.length === 0 ? (
              false
            ) : (
              <span className="badge__icon--primary badge--logo ">
                {state.wishlist.length}
              </span>
            )}
          </li>
          <li className="nav-bar__item badge__wrapper">
            <NavLink to="/cart/">
              <img
                src="/assets/image/HomePage-Images/cart.png"
                alt="cart-badge"
                className="nav-bar__img--icon nav-bar__img--cart badge__icon--img"
              />
            </NavLink>
            {state.cart.length === 0 ? (
              false
            ) : (
              <span className="badge__icon--primary badge--logo ">
                {state.cart.length}
              </span>
            )}
          </li>
          <li className="nav-bar__item">
            <NavLink to="/login/">
              <img
                className="nav-bar__img--icon nav-bar__img--login"
                src="/assets/image/HomePage-Images/Login.png"
                alt="Login/Sign-Up"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

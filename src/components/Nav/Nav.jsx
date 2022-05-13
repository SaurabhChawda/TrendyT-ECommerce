import React from "react";
import "./nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser, useAuth } from "../../Contexts/Index";
export function Nav() {
  const { logoutCredentials, authState } = useAuth();
  const { state } = useUser();
  const navigate = useNavigate();
  return (
    <div>
      {/* Navigation Bar Desktop */}
      <nav className="nav-bar nav-bar--simple">
        <nav className="nav-bar--logo">
          <NavLink to="/">
            <img className="nav-bar__img--logo" src="/assets/image/HomePage-Images/Trendy-T Logo.png" alt="Trendy-T" />
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
            {authState.isUserLoggedIn &&
              (state.wishlist.length === 0 ? (
                false
              ) : (
                <span className="badge__icon--primary badge--logo ">{state.wishlist.length}</span>
              ))}
          </li>
          <li className="nav-bar__item badge__wrapper">
            <NavLink to="/cart/">
              <img
                src="/assets/image/HomePage-Images/cart.png"
                alt="cart-badge"
                className="nav-bar__img--icon nav-bar__img--cart badge__icon--img"
              />
            </NavLink>
            {authState.isUserLoggedIn &&
              (state.cart.length === 0 ? (
                false
              ) : (
                <span className="badge__icon--primary badge--logo ">{state.cart.length}</span>
              ))}
          </li>
          <li className="nav-bar__item">
            <button
              className="nav-bar__btn-login"
              onClick={() => {
                authState.isUserLoggedIn ? logoutCredentials() : navigate("/login/");
              }}
            >
              {authState.isUserLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

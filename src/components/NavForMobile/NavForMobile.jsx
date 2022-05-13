import "./navForMobile.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/Index";
export const NavForMobile = () => {
  const [open, setOpen] = useState(false);
  const login = JSON.parse(localStorage.getItem("login"));
  const { logoutCredentials } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-bar nav-bar--hamburger">
        <div className="nav-bar--logo">
          <NavLink to="/">
            <img className="nav-bar__img--logo" src="/assets/image/HomePage-Images/Trendy-T Logo.png" alt="Trendy-T" />
          </NavLink>
        </div>
        <div className="nav-bar--hamburger">
          <img
            className="nav-bar__img--hamburger"
            src="/assets/image/HomePage-Images/Hamburger Menu.png"
            alt="Hamburger"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      <div style={open ? { width: "13rem" } : { width: "0" }} className="hamburger">
        <div className="hamburger__header--wrapper">
          <h1 className="hamburger__title">TRENDY-T</h1>
          <img
            className="hamburger__close-btn"
            src="/assets/image/HomePage-Images/Hamburger Close.png"
            alt="Hamburger"
            onClick={() => setOpen(false)}
          />
        </div>
        <ul className="hamburger__list">
          <NavLink to="/">
            <li className="hamburger__item">Home</li>
          </NavLink>
          <NavLink to="/products/">
            <li className="hamburger__item">Products</li>
          </NavLink>
          <NavLink to="/wishlist/">
            <li className="hamburger__item">Wishlist</li>
          </NavLink>
          <NavLink to="/cart/">
            <li className="hamburger__item">Cart</li>
          </NavLink>
          <button
            className="hamburger__item hamburger__btn "
            onClick={() => {
              login ? logoutCredentials() : navigate("/login/");
            }}
          >
            {login ? "Logout" : "Login / SignUp"}
          </button>
        </ul>
      </div>
    </>
  );
};

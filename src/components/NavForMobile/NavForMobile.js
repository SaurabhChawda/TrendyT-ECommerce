import Logo from "../../assets/image/HomePage-Images/Trendy-T Logo.png";
import HamburgerIcon from "../../assets/image/HomePage-Images/Hamburger Menu.png";
import CloseHamburger from "../../assets/image/HomePage-Images/Hamburger Close.png";
import "./navForMobile.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const NavForMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="nav-bar nav-bar--hamburger">
        <div className="nav-bar--logo">
          <NavLink to="/">
            <img className="nav-bar__img--logo" src={Logo} alt="Trendy-T" />
          </NavLink>
        </div>
        <div className="nav-bar--hamburger">
          <img
            className="nav-bar__img--hamburger"
            src={HamburgerIcon}
            alt="Hamburger"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      <div
        style={open ? { width: "50vw" } : { width: "0" }}
        className="hamburger"
      >
        <div className="hamburger__header--wrapper">
          <h1 className="hamburger__title">TRENDY-T</h1>
          <img
            className="hamburger__close-btn"
            src={CloseHamburger}
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
          <NavLink to="/login/">
            <button className="hamburger__item hamburger__btn ">
              Login / Sign-Up
            </button>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

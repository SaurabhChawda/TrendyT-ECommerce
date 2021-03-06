import "./signup.css";
import "./signup-Responsive.css";
import { useState } from "react";
import { Nav, NavForMobile, Footer } from "../../components/Index";
import { useAuth } from "../../Contexts/Index";
import { NavLink } from "react-router-dom";
export const Signup = () => {
  const { signUpCredentials } = useAuth();
  const [showpassword, setShowPassword] = useState("password");
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });
  const newUserHandler = (event) => {
    return setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };
  const submitHandler = (event, newUser) => {
    event.preventDefault();
    if (newUser.password === newUser.confirmPassword) {
      signUpCredentials(newUser);
    } else {
      console.log("Incorrect Password");
    }
  };
  return (
    <div className="signup-page">
      <Nav />
      <NavForMobile />
      <main className="signup__main">
        <section className="signup">
          <div className="signup--header">
            <h1 className="signup__title">Sign-Up</h1>
          </div>
          <form className="signup-form">
            <div className="signup-form--username-wrapper">
              <div className="signup-form--name-wrapper signup-form--firstname-wrapper">
                <label className="signup-form__label signup-form--firstname" htmlFor="userName">
                  <b>FirstName</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--username"
                  type="text"
                  placeholder="Firstname"
                  required
                  name="firstName"
                  onChange={(e) => newUserHandler(e)}
                />
              </div>

              <div className="signup-form--name-wrapper signup-form--lastname-wrapper">
                <label className="signup-form__label signup-form--lastname" htmlFor="userName">
                  <b>LastName</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--username"
                  type="text"
                  placeholder="Lastname"
                  required
                  name="lastName"
                  onChange={(e) => newUserHandler(e)}
                />
              </div>
            </div>
            <label className="signup-form__label signup-form--gmail" htmlFor="userGmail">
              <b>Email Address</b>
            </label>
            <input
              className="signup-form__input-demo signup-form__input--usergmail"
              type="email"
              placeholder="trendyt@gmail.com"
              name="email"
              required
              onChange={(e) => newUserHandler(e)}
            />
            <label className="signup-form__label signup-form--address" htmlFor="address">
              <b>Address</b>
            </label>
            <input
              className="signup-form__input-demo"
              type="address"
              placeholder="Enter Address"
              name="address"
              required
              onChange={(e) => newUserHandler(e)}
            />
            <label className="signup-form__label signup-form--contact" htmlFor="contact">
              <b>Contact</b>
            </label>
            <input
              className="signup-form__input-demo signup-form__input--contact"
              type="number"
              placeholder="Contact Number"
              required
              name="contact"
              onChange={(e) => newUserHandler(e)}
            />
            <div className="signup-form--user-password-wrapper">
              <div className="signup-form--password-wrapper signup-form--first-password-wrapper">
                <label className="signup-form__label signup-form--password" htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--password-first"
                  type={showpassword}
                  placeholder="Enter Password"
                  name="password"
                  required
                  onChange={(e) => newUserHandler(e)}
                />
              </div>
              <div className="signup-form--password-wrapper signup-form--Repeat-password-wrapper">
                <label className="signup-form__label signup-form--password" htmlFor="password">
                  <b>Confirm Password</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--password-second"
                  type={showpassword}
                  placeholder="confirm Password"
                  name="confirmPassword"
                  required
                  onChange={(e) => newUserHandler(e)}
                />
                <i className="signup-form__input--password-hide-icon">
                  <img
                    src={
                      showpassword === "password"
                        ? "/assets/image/SignUp/eyeHide.png"
                        : "/assets/image/SignUp/eyeShow.png"
                    }
                    alt="Show Password"
                    onClick={() => setShowPassword(showpassword === "password" ? "text" : "password")}
                  />
                </i>
              </div>
            </div>
            <div className="signup-form--submit">
              <button className="signup-form__btn--submit" onClick={(event) => submitHandler(event, newUser)}>
                Submit
              </button>
            </div>
            <div className="signup-form--new-account">
              <small className="signup-form__btn--new-account signup-form__btn--new-account-text">
                Already have an Account ?
              </small>
              <NavLink className="signup-form__btn--new-account" to="/login/">
                Login
              </NavLink>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

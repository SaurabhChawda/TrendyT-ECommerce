import "./login.css";
import "./login-Responsive.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavForMobile, Footer } from "../../components/Index";
import { useAuth } from "../../Contexts/Index";

export function Login() {
  const { loginCredentials } = useAuth();
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const [showpassword, setShowPassword] = useState("password");

  const loginHandler = (event, user) => {
    event.preventDefault();
    if (user.username === "" || user.password === "") {
      console.log("Incorrect Password");
    } else {
      loginCredentials(user);
    }
  };
  return (
    <div className="login-page">
      <Nav />
      <NavForMobile />
      <main className="login__main">
        <section className="login">
          <div className="login--header">
            <h1 className="login__title">Login</h1>
          </div>
          <form className="login-form">
            <div className="login-form--primary-container">
              <label className="login-form__label login-form--username" htmlFor="userName">
                <b>Email Address</b>
              </label>
              <input
                className="login-form__input-demo login-form__input--username"
                type="email"
                placeholder="trendyt@gmail.com"
                name="uname"
                required
                onChange={(event) => setUserLogin({ ...userLogin, username: event.target.value })}
              />
              <label className="login-form__label login-form--password" htmlFor="password">
                <b>Password</b>
              </label>
              <div className="login-form--password">
                <input
                  className="login-form__input-demo login-form__input--password"
                  type={showpassword}
                  placeholder="Enter Password"
                  name="password"
                  required
                  onChange={(event) => setUserLogin({ ...userLogin, password: event.target.value })}
                />
                <i className="login-form__input--password-hide-icon">
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
            <div className="login-form--remember-forget-password">
              <button className="login-form__btn--forget-password">Forget password ?</button>
            </div>
            <div className="login-form--submit">
              <button className="login-form__btn--submit" onClick={(event) => loginHandler(event, userLogin)}>
                Login
              </button>
              <button
                className="login-form__btn--submit"
                onClick={(event) => loginHandler(event, { username: "admin@gmail.com", password: "admin" })}
              >
                Login As Guest
              </button>
            </div>
            <div className="login-form--new-account">
              <small className="login-form__btn--new-account login-form__btn--new-account-text">
                Don't have an Account ?
              </small>
              <NavLink className="login-form__btn--new-account" to="/signUp/">
                SignUp
              </NavLink>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

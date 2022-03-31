import { Nav } from "../../components/Nav/Nav";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile";
import { Footer } from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import "./login.css";
import "./login-Responsive.css";
export function Login() {
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
              <label
                className="login-form__label login-form--username"
                htmlFor="userName"
              >
                <b>Email Address</b>
              </label>
              <input
                className="login-form__input-demo login-form__input--username"
                type="email"
                placeholder="trendyt@gmail.com"
                name="uname"
                required
              />
              <label
                className="login-form__label login-form--password"
                htmlFor="password"
              >
                <b>Password</b>
              </label>
              <div className="login-form--password">
                <input
                  className="login-form__input-demo login-form__input--password"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                />
                <i className="login-form__input--password-hide-icon">
                  <img src="/assets/image/Login/eye Show.png" alt="Show Password" />
                </i>
              </div>
            </div>
            <div className="login-form--remember-forget-password">
              <label className="login-form--remember-me">
                <input
                  className="login-form__input--remember-me"
                  type="checkbox"
                  defaultChecked="checked"
                  name="remember"
                />
                Remember me
              </label>
              <button className="login-form__btn--forget-password">
                Forget password
              </button>
            </div>
            <div className="login-form--submit">
              <button className="login-form__btn--submit">Login</button>
            </div>
            <div className="login-form--new-account">
              <NavLink className="login-form__btn--new-account" to="/signup/">
                Create New Account
              </NavLink>
            </div>
            <div className="login-form--logOut">
              <button className="login-form__btn--logOut">LogOut</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

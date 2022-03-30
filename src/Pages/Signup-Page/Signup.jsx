import { Nav } from "../../components/Nav/Nav";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile.jsx";
import { Footer } from "../../components/Footer/Footer";
import "./signup.css";
import "./signup-Responsive.css";

export function Signup() {
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
                <label
                  className="signup-form__label signup-form--firstname"
                  htmlFor="userName"
                >
                  <b>FirstName</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--username"
                  type="text"
                  placeholder="Firstname"
                  required
                />
              </div>
              <div className="signup-form--name-wrapper signup-form--lastname-wrapper">
                <label
                  className="signup-form__label signup-form--lastname"
                  htmlFor="userName"
                >
                  <b>SurName</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--username"
                  type="text"
                  placeholder="Surname"
                  required
                />
              </div>
            </div>
            <label
              className="signup-form__label signup-form--gmail"
              htmlFor="userGmail"
            >
              <b>Email Address</b>
            </label>
            <input
              className="signup-form__input-demo signup-form__input--usergmail"
              type="email"
              placeholder="trendyt@gmail.com"
              name="uname"
              required
            />
            <label
              className="signup-form__label signup-form--address"
              htmlFor="address"
            >
              <b>Address</b>
            </label>
            <input
              className="signup-form__input-demo"
              type="address"
              placeholder="Enter Address"
              name="password"
              required
            />
            <label
              className="signup-form__label signup-form--contact"
              htmlFor="contact"
            >
              <b>Contact</b>
            </label>
            <input
              className="signup-form__input-demo signup-form__input--contact"
              type="contact"
              placeholder="Contact Number"
              required
            />
            <div className="signup-form--user-password-wrapper">
              <div className="signup-form--password-wrapper signup-form--first-password-wrapper">
                <label
                  className="signup-form__label signup-form--password"
                  htmlFor="password"
                >
                  <b>Password</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--password-first"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                />
              </div>
              <div className="signup-form--password-wrapper signup-form--Repeat-password-wrapper">
                <label
                  className="signup-form__label signup-form--password"
                  htmlFor="password"
                >
                  <b>Repeat Password</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--password-second"
                  type="password"
                  placeholder="Repeat Password"
                  name="password"
                  required
                />
                <i className="signup-form__input--password-hide-icon">
                  <img
                    src="/assets/image/SignUp/eyeShow.png"
                    alt="Show Password"
                  />
                </i>
              </div>
            </div>
            <div className="signup-form--submit">
              <button className="signup-form__btn--submit">Submit</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

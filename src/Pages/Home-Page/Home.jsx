import React from "react";
import "./home.css";
import "./responsive.css";
import { Nav } from "../../components/Nav/Nav";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile.js";
import { Footer } from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";


import ManCategory from "../../assets/image/HomePage-Images/Trendy-T Man.jpg";
import WomenCategory from "../../assets/image/HomePage-Images/Trendy-T Women.jpg";
import KidCategory from "../../assets/image/HomePage-Images/Trendy-T Kids.jpg";
import FamilyCategory from "../../assets/image/HomePage-Images/Trendy-T Family.jpg";

import BestQuality from "../../assets/image/HomePage-Images/Best-Quality.png";
import BestOffer from "../../assets/image/HomePage-Images/Best-Offer.png";
import Secure from "../../assets/image/HomePage-Images/Secure.png";
import FreeShipping from "../../assets/image/HomePage-Images/Free-Shipping.png";


export function Home() {
  return (
    <div className="home-page">
      <Nav />
      <NavForMobile />
      <main>
        {/* Home Page Content */}
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
        {/* Home Page Content Ends Here */}


        {/* Header */}
        <div className="card__header">
          <h1 className="card__header--title">CATEGORY</h1>
        </div>
        {/* Header Ends Here*/}


        {/* Header product Category */}
        <section className="card-product-category">
          <div className="card-product-category--demo card-product-category--man">
            <img
              className="card-product-category--demo-img card-product-category--man-img"
              src={ManCategory}
              alt="men"
            />
            <div className="card-product-category__content--demo">
              <h1 className="card-product-category__title card-product-category__title--man">
                Man's T-shirt
              </h1>
              <a href="/Product-Category/mans-category.html">
                <button className="card-product-category__btn card-product-category__btn--man">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
          <div className="card-product-category--demo card-product-category--Women">
            <img
              className="card-product-category--demo-img card-product-category--women-img"
              src={WomenCategory}
              alt="women"
            />
            <div className="card-product-category__content--demo">
              <h1 className="card-product-category__title card-product-category__title--women">
                women's T-shirt
              </h1>
              <a href="/Product-Category/womens-category.html">
                <button className="card-product-category__btn card-product-category__btn--women">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
          <div className="card-product-category--demo card-product-category--kid">
            <img
              className="card-product-category--demo-img card-product-category--kid-img"
              src={KidCategory}
              alt="kid"
            />
            <div className="card-product-category__content--demo">
              <h1 className="card-product-category__title card-product-category__title--kid">
                Kid's T-Shirt
              </h1>
              <a href="/Product-Category/Kids-category.html">
                <button className="card-product-category__btn card-product-category__btn--kid">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
          <div className="card-product-category--demo card-product-category--family">
            <img
              className="card-product-category--demo-img card-product-category--family-img"
              src={FamilyCategory}
              alt="family"
            />
            <div className="card-product-category__content--demo">
              <h1 className="card-product-category__title card-product-category__title--family">
                Family T-Shirt
              </h1>
              <a href="/Product-Category/Family-category.html">
                <button className="card-product-category__btn card-product-category__btn--family">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </section>
        {/* Header product Category Ends Here*/}
        {/* Header */}
        <div className="card__header">
          <h1 className="card__header--title">OFFER</h1>
        </div>
        {/* Header Ends Here*/}
        {/* Header product offer */}
        <section className="card card-offer">
          <div className="card__container--demo card-offer__container">
            <div className="card__wrapper--demo card-offer__wrapper">
              <h1 className="card__title--demo card-offer__title">FLAT 10% </h1>
              <h2 className="card__subtitle--demo card-offer__Subtitle">OFF</h2>
              <a href>
                <button className="card__btn--demo card-offer__btn">
                  Get Offer
                </button>
              </a>
            </div>
            <div className="card__wrapper--demo card-offer__wrapper">
              <h1 className="card__title--demo card-offer__title">FLAT 20% </h1>
              <h2 className="card__subtitle--demo card-offer__Subtitle">OFF</h2>
              <a href>
                <button className="card__btn--demo card-offer__btn">
                  Get Offer
                </button>
              </a>
            </div>
            <div className="card__wrapper--demo card-offer__wrapper">
              <h1 className="card__title--demo card-offer__title">FLAT 40% </h1>
              <h2 className="card__subtitle--demo card-offer__Subtitle">OFF</h2>
              <a href>
                <button className="card__btn--demo card-offer__btn">
                  Get Offer
                </button>
              </a>
            </div>
            <div className="card__wrapper--demo card-offer__wrapper">
              <h1 className="card__title--demo card-offer__title">FLAT 50% </h1>
              <h2 className="card__subtitle--demo card-offer__Subtitle">OFF</h2>
              <a href>
                <button className="card__btn--demo card-offer__btn">
                  Get Offer
                </button>
              </a>
            </div>
          </div>
        </section>
        {/* Header product offer Ends Here*/}
        {/* Header */}
        <div className="card__header">
          <h1 className="card__header--title">PRODUCT</h1>
        </div>
        {/* Header Ends Here*/}


        {/* Header */}
        <div className="card__header">
          <h1 className="card__header--title">Service</h1>
        </div>
        {/* Header Ends Here*/}
        {/* Header product service */}
        <section className="card card-service">
          <div className="card__container--demo card-service__container">
            <div className="card__wrapper--demo card-service__wrapper">
              <img
                className="card-service__img"
                src={BestQuality}
                alt="Best-Quality"
              />
              <h1 className="card__title--demo card-service__title">
                Best Quality
              </h1>
            </div>
            <div className="card__wrapper--demo card-service__wrapper">
              <img
                className="card-service__img"
                src={BestOffer}
                alt="Best-Offer"
              />
              <h1 className="card__title--demo card-service__title">
                Best Offer
              </h1>
            </div>
            <div className="card__wrapper--demo card-service__wrapper">
              <img className="card-service__img" src={Secure} alt="Secure" />
              <h1 className="card__title--demo card-service__title">Secure</h1>
            </div>
            <div className="card__wrapper--demo card-service__wrapper">
              <img
                className="card-service__img"
                src={FreeShipping}
                alt="Free-Shipping"
              />
              <h1 className="card__title--demo card-service__title">
                Free Shipping
              </h1>
            </div>
          </div>
        </section>
        {/* Header product Service Ends Here*/}
      </main>
      <Footer />
    </div>
  );
}

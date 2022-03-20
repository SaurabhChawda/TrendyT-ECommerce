import React from "react";
import "./home.css";
import "./home-responsive.css";
import { Nav } from "../../components/Nav/Nav";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile.js";
import { Footer } from "../../components/Footer/Footer";
import { HomeScreen } from "./Components/HomeScreen";
import { Category } from "./Components/Category";
import { Offer } from "./Components/Offer";
import { Product } from "./Components/Product";
import { Services } from "./Components/Services";

export function Home() {
  return (
    <div className="home-page">
      <Nav />
      <NavForMobile />
      <main>
        <HomeScreen />
        <Category />
        <Offer />
        <Product />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

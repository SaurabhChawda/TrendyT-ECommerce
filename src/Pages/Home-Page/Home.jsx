import React from "react";
import "./home.css";
import "./home-responsive.css";
import { Nav, Footer, NavForMobile } from "../../components/Index.js";
import {
  HomeScreen,
  Product,
  Offer,
  Category,
  Services,
} from "./Components/Index.js";

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

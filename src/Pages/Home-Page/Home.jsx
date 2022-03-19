import React from "react";
import "./home.css";
import "./responsive.css";
import { Nav } from "../../components/Nav/Nav";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile.js";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
  return (
    <div className="home-page">
      <Nav />
      <NavForMobile />
      <Footer />
    </div>
  );
}

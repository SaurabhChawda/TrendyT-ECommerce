import { Nav } from "../../components/Nav/Nav";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile";
import { Footer } from "../../components/Footer/Footer";
import { WishlistHeader } from "./Components/WishlistHeader.jsx";

import "./wishlist.css";
import "./wishlist-Responsive.css";

export function Wishlist() {
  return (
    <div className="wishlist-page">
      <Nav />
      <NavForMobile />
      <main className="wishlist__main">
        <WishlistHeader />
      </main>
      <Footer />
    </div>
  );
}

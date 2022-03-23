import { Nav } from "../../components/Nav/Nav";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile";
import { Footer } from "../../components/Footer/Footer";
import { WishlistHeader } from "./Components/WishlistHeader.jsx";
import { AddToWishlist } from "./Components/AddToWishlist";

import "./wishlist.css";
import "./wishlist-Responsive.css";

export function Wishlist() {
  return (
    <div className="wishlist-page">
      <Nav />
      <NavForMobile />
      <main className="wishlist__main">
        <WishlistHeader />
        <AddToWishlist />
      </main>
      <Footer />
    </div>
  );
}

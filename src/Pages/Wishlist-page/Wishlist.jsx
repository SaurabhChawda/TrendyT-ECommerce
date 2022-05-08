import "./wishlist.css";
import "./wishlist-Responsive.css";
import { Nav, NavForMobile, Footer } from "../../components/Index";
import { WishlistHeader } from "./Components/WishlistHeader.jsx";
import { AddToWishlist } from "./Components/AddToWishlist";

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

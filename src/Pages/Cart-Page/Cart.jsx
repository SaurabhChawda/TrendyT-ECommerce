import { Nav } from "../../components/Nav/Nav";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile.jsx";
import { Footer } from "../../components/Footer/Footer";
import { CartHeader } from "./Components/CartHeader";
import { AddToCart } from "./Components/AddToCart";
import { CartBill } from "./Components/CartBill";
import "./cart.css";
import "./cart-Responsive.css";

export function Cart() {
  return (
    <div className="cart-page">
      <Nav />
      <NavForMobile />
      <main className="Cart-Page__main">
        <CartHeader />
        <section className="cart__content">
          <AddToCart />
          <CartBill />
        </section>
      </main>
      <Footer />
    </div>
  );
}

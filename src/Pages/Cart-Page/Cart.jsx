import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/Footer/Footer";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile.jsx";
import { CartHeader } from "./Components/CartHeader";
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
        </section>
      </main>
      <Footer />
    </div>
  );
}

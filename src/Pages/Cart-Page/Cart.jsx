import { Nav } from "../../components/Nav/Nav";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile.jsx";
import { Footer } from "../../components/Footer/Footer";
import { CartHeader } from "./Components/CartHeader";
import { AddToCart } from "./Components/AddToCart";
import { CartBill } from "./Components/CartBill";
import { useUser } from "../../Contexts/UserContext";
import "./cart.css";
import "./cart-Responsive.css";

export function Cart() {
  const { state } = useUser();
  const CartData = [...state.cart];
  return (
    <div className="cart-page">
      <Nav />
      <NavForMobile />
      <main className="Cart-Page__main">
        <CartHeader />
        {CartData.length === 0 && (
          <h1 className="card-product_Empty">Your Cart is empty!</h1>
        )}
        <section className="cart__content">
          <AddToCart />
          <CartBill />
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { useUser } from "../../../Contexts/UserContext";
export const CartHeader = () => {
  const { state } = useUser();
  return (
    <section className="cart__header">
      <h3 className="cart__title">My Cart({state.cart.length})</h3>
    </section>
  );
};

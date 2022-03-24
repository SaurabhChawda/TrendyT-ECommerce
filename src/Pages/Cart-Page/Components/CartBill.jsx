import { useUser } from "../../../Contexts/UserContext";
export const CartBill = () => {
  const { state } = useUser();
  const cartdata = [...state.cart];

  const totalData =
    cartdata.length !== 0 &&
    cartdata.reduce(
      (pre, curr) => ({
        ...pre,
        totalPrice: pre.totalPrice + curr.qty * curr.price,
        totalDiscount: pre.totalDiscount + curr.qty * curr.discount,
      }),
      {
        totalPrice: 0,
        totalDiscount: 0,
      }
    );

  return (
    <>
      {cartdata.length === 0 ? (
        false
      ) : (
      <div className="cart__detail">
        <div className="cart__item-demo cart__detail--price">
          <h1>PRICE DETAILS</h1>
        </div>
        <hr />
        <div className="cart__item-demo cart__detail--total">
          <small>Items</small>
          <small>{cartdata.length}</small>
        </div>
        <div className="cart__item-demo cart__detail--mrp">
          <small>Total MRP</small>
          <small>{totalData.totalPrice}</small>
        </div>
        <div className="cart__item-demo cart__detail--discount">
          <small>Discount</small>
          <small>- ₹{totalData.totalDiscount}</small>
        </div>
        <div className="cart__item-demo cart__detail-delivery">
          <small>Delivery Charges</small>
          <small>Free Delivery</small>
        </div>
        <hr />
        <div className="cart__item-demo cart__detail--total">
          <small>Total </small>
          <small>₹{totalData.totalPrice - totalData.totalDiscount}</small>
        </div>
        <div className="cart__item-demo cart__detail--place-order">
          <button className="cart__btn">Place order</button>
        </div>
      </div>
      )}
    </>
  );
};

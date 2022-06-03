import { useUser } from "../../../Contexts/Index";

export const AddToCart = () => {
  const { RemoveFromCart, IncreaseQty, DecreaseQty, state, AddToWishlist } = useUser();
  const cartdata = [...state.cart];
  return (
    <div className="card-product">
      {cartdata.length !== 0 &&
        cartdata.map((item) => {
          return (
            <div key={item.id} className="card-product__wrapper">
              <div className="card-product__primary--actions">
                <div className="card-product__bg">
                  <img className="card-product__bg--img" src={item.img} />
                </div>
                <div className="card-product__content">
                  <h3 className="card-product__content--title">{item.title}</h3>
                  <span className="card-product__content--price">₹ {item.price}/-</span>
                  <small className="card-product__content--price-line">₹ {item.originalPrice}</small>
                </div>
                <div className="card-product__wrapper--quantity">
                  <small>Quantity</small>
                  <button
                    className="card-product--quantity-demo card-product--quantity-add"
                    onClick={() => IncreaseQty(item)}
                  >
                    +
                  </button>
                  <span className="card-product--quantity--count">{item.qty}</span>
                  <button
                    className="card-product--quantity-demo card-product--quantity-sub"
                    disabled={item.qty <= 1 ? true : false}
                    onClick={() => DecreaseQty(item)}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="card-product__secondary--actions">
                <div className="card-product__button--container">
                  <button
                    className=" card-product__btn card-product__button--primary"
                    onClick={() => AddToWishlist(item)}
                  >
                    WISHLIST
                  </button>
                  <button
                    className=" card-product__btn card-product__button--primary"
                    onClick={() => RemoveFromCart(item)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

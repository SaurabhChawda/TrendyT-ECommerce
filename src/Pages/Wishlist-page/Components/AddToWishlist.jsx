import { useUser } from "../../../Contexts/UserContext";
export const AddToWishlist = () => {
  const { state, dispatch } = useUser();
  const wishlistdata = [...state.wishlist];
  return (
    <section className="card-product">
      {wishlistdata.length === 0 ? (
        <h1 className="card-product_Empty">Your Wishlist is empty!</h1>
      ) : (
        wishlistdata.map((item) => {
          return (
            <div className="card-product__wrapper">
              <div className="card-product__primary--actions">
                <div className="card-product__bg">
                  <img className="card-product__bg--img" src={item.img} />
                </div>
                <div className="card-product__content">
                  <h3 className="card-product__content--title">{item.title}</h3>
                  <span className="card-product__content--price">
                    ₹ {item.price}/-
                  </span>
                  <small className="card-product__content--price-line">
                    ₹ {item.originalPrice} /-
                  </small>
                </div>
              </div>
              <div className="card-product__secondary--actions">
                <div className="card-product__button--container">
                  <button
                    className=" card-product__btn card-product__button--primary"
                    onClick={() =>
                      dispatch({
                        type: "Remove_From_Wishlist",
                        payload: item.id,
                        id: item.id,
                      })
                    }
                  >
                    REMOVE
                  </button>
                  <button
                    className="card-product__btn card-product__button--secondary"
                    onClick={() =>
                      dispatch({
                        type: "Cart",
                        payload: item,
                        id: item.id,
                      })
                    }
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

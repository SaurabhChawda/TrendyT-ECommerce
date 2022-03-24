import { useUser } from "../../../Contexts/UserContext";

export const AddToCart = () => {
  const { state, dispatch } = useUser();
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
                    <h3 className="card-product__content--title">
                      {item.title}
                    </h3>
                    <span className="card-product__content--price">
                      ₹ {item.price}/-
                    </span>
                    <small className="card-product__content--price-line">
                      ₹ {item.originalPrice}
                    </small>
                  </div>
                  <div className="card-product__wrapper--quantity">
                    <small>Quantity</small>
                    <button
                      className="card-product--quantity-demo card-product--quantity-add"
                      onClick={() =>
                        dispatch({
                          type: "Add_Item_In_Cart",
                          id: item.id,
                        })
                      }
                    >
                      Add
                    </button>
                    <span className="card-product--quantity--count">
                      {item.qty}
                    </span>
                    <button
                      className="card-product--quantity-demo card-product--quantity-sub"
                      onClick={() =>
                        dispatch({
                          type: "Sub_Item_From_Cart",
                          id: item.id,
                        })
                      }
                    >
                      Sub
                    </button>
                    {item.qty === 0 &&
                      dispatch({
                        type: "Remove_From_Cart",
                        payload: item.id,
                      })}
                  </div>
                </div>
                <div className="card-product__secondary--actions">
                  <div className="card-product__button--container">
                    <button
                      className=" card-product__btn card-product__button--primary"
                      onClick={() =>
                        dispatch({
                          type: "Remove_From_Cart",
                          payload: item.id,
                        })
                      }
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

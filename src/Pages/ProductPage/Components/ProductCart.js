import { v4 as uuidv4 } from "uuid";
import { useFilter } from "../../../Contexts/FilterContext";
import { useUser } from "../../../Contexts/UserContext";
export const ProductCart = () => {
  const { updatedList } = useFilter();
  const { dispatch } = useUser();
  return (
    <section className="card-product">
      {updatedList.map((item) => {
        return (
          <div key={uuidv4()} className="card-product__wrapper">
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
                  ₹ {item.originalPrice}
                </small>
              </div>
            </div>
            <div className="card-product__secondary--actions">
              <div className="card-product__button--container">
                <button
                  className=" card-product__btn card-product__button--primary"
                  onClick={() =>
                    dispatch({
                      type: "Wishlist",
                      payload: item,
                      id: item.id,
                    })
                  }
                >
                  WISHLIST
                </button>
                <button
                  className="card-product__btn card-product__button--secondary"
                  onClick={() =>
                    dispatch({ type: "Cart", payload: item, id: item.id })
                  }
                >
                  BUY NOW
                </button>
              </div>
              <div className="card-product__badge">
                <span className="card-product__badge-text">BestSaller</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

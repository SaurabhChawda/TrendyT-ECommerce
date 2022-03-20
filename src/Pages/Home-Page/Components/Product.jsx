import { v4 as uuidv4 } from "uuid";
import { useProducts } from "../../../Contexts/ProductsContext";

export const Product = () => {
  const { data } = useProducts();
  return (
    <>
      {/* Header */}
      <div className="card__header">
        <h1 className="card__header--title">PRODUCT</h1>
      </div>
      {/* Header Ends Here*/}
      <section className="card-product">
        {data &&
          data
            .filter((item) => item.Rating >= 3 && item)
            .map((item) => {
              return (
                <div key={uuidv4()} className="card-product__wrapper">
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
                  </div>
                  <div className="card-product__secondary--actions">
                    <div className="card-product__button--container">
                      <button className=" card-product__btn card-product__button--primary">
                        WISHLIST
                      </button>
                      <button className="card-product__btn card-product__button--secondary">
                        BUY NOW
                      </button>
                    </div>
                    <div className="card-product__badge">
                      <span className="card-product__badge-text">
                        BestSaller
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
      </section>
    </>
  );
};

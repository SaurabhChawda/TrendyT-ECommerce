import { useFilter } from "../../../Contexts/FilterContext";
import { useProducts } from "../../../Contexts/ProductsContext";
import { useNavigate } from "react-router-dom";
export const Category = () => {
  const navigate = useNavigate();
  const { dispatch } = useFilter();
  const { categoryData } = useProducts();
  return (
    <div>
      <div className="card__header">
        <h1 className="card__header--title">CATEGORY</h1>
      </div>
      <section className="card-product-category">
        {categoryData &&
          categoryData.map((item) => {
            return (
              <div className="card-product-category--demo">
                <img
                  className="card-product-category--demo-img"
                  src={item.img}
                  alt={item.categoryName}
                />
                <div className="card-product-category__content--demo">
                  <h1 className="card-product-category__title">
                    {item.categoryName}
                  </h1>
                  <button
                    className="card-product-category__btn"
                    onClick={() => {
                      navigate("/products");
                      dispatch({ type: item.type });
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

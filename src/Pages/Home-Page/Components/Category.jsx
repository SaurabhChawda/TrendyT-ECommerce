export const Category = () => {
  return (
    <>
      <div className="card__header">
        <h1 className="card__header--title">CATEGORY</h1>
      </div>

      {/* Header product Category */}
      <section className="card-product-category">
        <div className="card-product-category--demo card-product-category--man">
          <img
            className="card-product-category--demo-img card-product-category--man-img"
            src="/assets/image/HomePage-Images/Trendy-T Man.jpg"
            alt="men"
          />
          <div className="card-product-category__content--demo">
            <h1 className="card-product-category__title card-product-category__title--man">
              Man's T-shirt
            </h1>
            <a href="/Product-Category/mans-category.html">
              <button className="card-product-category__btn card-product-category__btn--man">
                Buy Now
              </button>
            </a>
          </div>
        </div>
        <div className="card-product-category--demo card-product-category--Women">
          <img
            className="card-product-category--demo-img card-product-category--women-img"
            src="/assets/image/HomePage-Images/Trendy-T Women.jpg"
            alt="women"
          />
          <div className="card-product-category__content--demo">
            <h1 className="card-product-category__title card-product-category__title--women">
              women's T-shirt
            </h1>
            <a href="/Product-Category/womens-category.html">
              <button className="card-product-category__btn card-product-category__btn--women">
                Buy Now
              </button>
            </a>
          </div>
        </div>
        <div className="card-product-category--demo card-product-category--kid">
          <img
            className="card-product-category--demo-img card-product-category--kid-img"
            src="/assets/image/HomePage-Images/Trendy-T Kids.jpg"
            alt="kid"
          />
          <div className="card-product-category__content--demo">
            <h1 className="card-product-category__title card-product-category__title--kid">
              Kid's T-Shirt
            </h1>
            <a href="/Product-Category/Kids-category.html">
              <button className="card-product-category__btn card-product-category__btn--kid">
                Buy Now
              </button>
            </a>
          </div>
        </div>
        <div className="card-product-category--demo card-product-category--family">
          <img
            className="card-product-category--demo-img card-product-category--family-img"
            src="/assets/image/HomePage-Images/Trendy-T Family.jpg"
            alt="family"
          />
          <div className="card-product-category__content--demo">
            <h1 className="card-product-category__title card-product-category__title--family">
              Family T-Shirt
            </h1>
            <a href="/Product-Category/Family-category.html">
              <button className="card-product-category__btn card-product-category__btn--family">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

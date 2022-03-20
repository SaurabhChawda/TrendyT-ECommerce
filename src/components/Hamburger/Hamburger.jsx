import CloseHamburger from '../../assets/image/HomePage-Images/Hamburger Close.png'
export function Hamburger() {
  return (
    <div className="hamburger">
      <div className="hamburger__header--wrapper">
        <h1 className="hamburger__title">TRENDY-T</h1>
        <img
          className="hamburger__close-btn"
          src={CloseHamburger}
          alt="Hamburger"
        />
      </div>
      <ul className="hamburger__list">
        <a href="/index.html">
          <li className="hamburger__item">Home</li>
        </a>
        <a href="/Product-Page/product.html">
          <li className="hamburger__item">Product</li>
        </a>
        <a href="/wishlist-page/wishlist.html">
          <li className="hamburger__item">Wishlist</li>
        </a>
        <a href="/Cart-Page/cart.html">
          <li className="hamburger__item">Cart</li>
        </a>
        <a href="/Login-page/login.html">
          <button className="hamburger__item hamburger__btn ">
            Login / Sign-Up
          </button>
        </a>
      </ul>
    </div>
  );
}

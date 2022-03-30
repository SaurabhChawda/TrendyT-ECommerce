import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "../src/Pages/Home-Page/Home";
import { Product } from "../src/Pages/ProductPage/Product";
import { Wishlist } from "../src/Pages/Wishlist-page/Wishlist";
import { Cart } from "../src/Pages/Cart-Page/Cart";
import { Signup } from "../src/Pages/Signup-Page/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/" element={<Product />}></Route>
        <Route path="/wishlist/" element={<Wishlist />}></Route>
        <Route path="/cart/" element={<Cart />}></Route>
        <Route path="/signup/" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "../src/Pages/Home-Page/Home";
import { Product } from "../src/Pages/ProductPage/Product";
import { Wishlist } from "../src/Pages/Wishlist-page/Wishlist";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;

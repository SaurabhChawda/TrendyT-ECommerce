import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "../src/Pages/Home-Page/Home";
import { Product } from "../src/Pages/ProductPage/Product";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;

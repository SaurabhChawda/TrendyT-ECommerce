import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home, Product, Wishlist, Cart, Signup, Login } from "../src/Pages/Index";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/" element={<Product />}></Route>
        <Route path="/signUp/" element={<Signup />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route
          path="/wishlist/"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cart/"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/mock" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;

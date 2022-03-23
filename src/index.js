import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "../src/Contexts/ProductsContext";
import { UserProvider } from "./Contexts/UserContext";
import { FilterProvider } from "../src/Contexts/FilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <UserProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </UserProvider>
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

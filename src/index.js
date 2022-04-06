import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "../src/Contexts/DataContext";
import { UserProvider } from "./Contexts/UserContext";
import { FilterProvider } from "../src/Contexts/FilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <UserProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </UserProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

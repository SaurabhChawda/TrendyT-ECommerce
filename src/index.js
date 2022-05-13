import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider, UserProvider, FilterProvider, AuthProvider } from "../src/Contexts/Index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <AuthProvider>
          <UserProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </UserProvider>
        </AuthProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

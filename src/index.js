import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "ag-grid-community/dist/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/dist/styles/ag-theme-alpine.css"; // Optional theme CSS
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css"; // Optional theme CSS

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

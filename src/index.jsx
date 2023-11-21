import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

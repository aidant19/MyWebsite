import React from "react";
import ReactDOM from "react-dom/client";
import Me from "./Me.jsx";
import About from "./About.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="main-body">
      <Me />
      <About />
    </div>
  </React.StrictMode>
);

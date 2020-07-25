import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContext from "./store";
import App from "./App";

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById("root")
);

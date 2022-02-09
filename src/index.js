import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./Store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Styles/base.css";
import "./Styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

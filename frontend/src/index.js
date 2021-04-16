import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Root from "./components/root";
import configureStore from "./store/store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (localStorage.jwtToken) {
    // to-do
  } else {
    store = configureStore({});
  }

  const root = document.getElementById("root");

  ReactDOM.render(
    <React.StrictMode>
      <Root store={store} />
    </React.StrictMode>,
    root
  );

  // api debugging
  window.axios = axios;
});

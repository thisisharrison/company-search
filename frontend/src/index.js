import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Root from "./components/root";
import configureStore from "./store/store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as API from "./util/session_api_util";
import { logout } from "./actions/session_action";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    API.setAuthToken(token);

    const decodeUser = jwt_decode(token);
    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decodeUser,
        access: token,
      },
    };
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;
    if (decodeUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/account/login";
    }
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
  window.store = store;
  window.getState = store.getState();
  window.API = API;
});

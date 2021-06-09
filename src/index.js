import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";

import "./index.css";

import store from "./redux/store";

import App from "./components/app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./Assets/css/card.css";
import "./Assets/css/bootstrap-datepicker3.standalone.css";
import "./Assets/css/detailpage.css";
import "./Assets/css/filter.css";
// import "./Assets/css/jquery-ui.css";
import "./Assets/css/lp1.css";
import "./Assets/css/searchbar.css";
import "./Assets/css/sidebar.css";
import "./Assets/css/option.css";
import "./Assets/css/style.css";
import "./Assets/css/style1.css";
import "./Assets/css/style2.css";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import rootReducers from "./store/reducers/index";
import { Provider } from "react-redux";

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

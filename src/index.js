/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./Assets/css/card.css";
import "./Assets/css/general.css";
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
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import CacheBuster from "./CacheBuster";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import reducers from "./redux/reducers";
import sagas from "./redux/sagas";
import App from "./App";

axios.defaults.baseURL = "https://glacialapi.trixno.com/";
axios.defaults.headers.common.Authorization = `JWT ${localStorage.getItem(
  "token"
)}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

// middlewared
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];

const store = createStore(
  reducers(history),
  compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(sagas);
ReactDOM.render(
  <CacheBuster>
    {({ loading, isLatestVersion, refreshCacheAndReload }) => {
      // console.log(loading)
      // console.log(isLatestVersion)
      // if (loading) return null
      if (!loading && !isLatestVersion) {
        return (
          <div class="container h-100">
            <div class="row align-items-center h-100">
              <div class="col-md-6 col-xs-12 mx-auto">
                <div class="jumbotron text-center">
                  <h5>Application has received an update</h5>
                  <h5>Please click update button use the application</h5>
                  <button
                    className="th-btn-primary px-3 py-1 my-3"
                    onClick={() => {
                      refreshCacheAndReload();
                    }}
                  >
                    Update Version
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }

      return (
        <Provider store={store}>
          <App history={history} />
        </Provider>
      );
    }}
  </CacheBuster>,

  document.getElementById("root")
);
serviceWorker.register();
export { store, history };

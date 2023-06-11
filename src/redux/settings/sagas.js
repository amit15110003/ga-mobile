/** @format */

import moment from "moment";
import { all, takeEvery, put } from "redux-saga/effects";
import store from "store";
import actions from "./actions";

export function* CHANGE_SETTING({ payload }) {
  // const date = localStorage.getItem("date");
  // const city = localStorage.getItem("city");
  console.log(payload);
  const { date, city } = payload;
  yield store.set(`date`, date);
  yield store.set(`city`, city);
  yield put({
    type: "settings/SET_STATE",
    payload: {
      date,
      city,
    },
  });
}

export function* CUSTOMISE_PACKAGE({ payload }) {
  // const date = localStorage.getItem("date");
  // const city = localStorage.getItem("city");
  console.log("rohan33", payload);
  // const { date, city } = payload;
  // yield store.set(`date`, date);
  // yield store.set(`city`, city);
  yield put({
    type: "settings/SET_STATE",
    payload,
  });
}

export function* LOAD_CURRENT() {
  var date = store.get("date");
  if (!date) {
    yield store.set(`date`, moment().format("D MMM, yyyy"));
    date = moment().format("D MMM, yyyy");
  }
  var city = store.get("city");
  if (!city) {
    yield store.set(`city`, "1");
    city = 1;
  }
  yield put({
    type: "settings/SET_STATE",
    payload: {
      date,
      city,
    },
  });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CHANGE_SETTING, CHANGE_SETTING),
    takeEvery(actions.CUSTOMISE_PACKAGE, CUSTOMISE_PACKAGE),
    LOAD_CURRENT(),
  ]);
}

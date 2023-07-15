/** @format */

import { all, takeEvery, put, call } from "redux-saga/effects";
// import { notification } from 'antd'
import { history } from "../../index";
import { login, currentAccount, logout } from "../../services/users";
import actions from "./actions";
import store from "store";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// toast.configure();

export function* LOGIN({ payload }) {
  const { username, password } = payload;
  yield put({
    type: "user/SET_STATE",
    payload: {
      loading: true,
      wrong: false,
    },
  });
  const success = yield call(login, username, password);
  yield put({
    type: "user/LOAD_CURRENT_ACCOUNT",
  });
  // console.log(success);
  if (success) {
    // toast("Logged in Successfully", { type: "success", autoClose: 2000 });
    // history.push("/");
    yield history.push("/");

    yield put({
      type: "user/SET_STATE",
      payload: {
        wrong: false,
        login: false,
      },
    });
  } else {
    yield put({
      type: "user/SET_STATE",
      payload: {
        loading: false,
        wrong: true,
        login: true,
      },
    });
  }
}

export function* LOAD_CURRENT_ACCOUNT() {
  yield put({
    type: "user/SET_STATE",
    payload: {
      loading: true,
    },
  });
  const response = yield call(currentAccount);
  if (response) {
    const { uid: id, contact, email, photoURL: avatar } = response;
    yield put({
      type: "user/SET_STATE",
      payload: {
        id: response.id,
        name: "Administrator",
        contact,

        email,
        avatar,
        role: "admin",
        authorized: true,
      },
    });
  }
  yield put({
    type: "user/SET_STATE",
    payload: {
      loading: false,
    },
  });
}

export function* LOGOUT() {
  yield call(logout);
  //   toast("Logged out Successfully", { type: "success", autoClose: 2000 });
  yield history.push("/");
  yield put({
    type: "user/SET_STATE",
    payload: {
      id: "",
      name: "",
      role: {},
      contact: "",
      email: "",
      avatar: "",
      authorized: false,
      loading: false,
    },
  });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ]);
}

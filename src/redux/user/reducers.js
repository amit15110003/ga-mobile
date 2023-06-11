/** @format */

import actions from "./actions";

const initialState = {
  id: "",
  name: "",
  contact: "",
  email: "",
  avatar: "",
  wrong: false,
  authorized: false,
  loading: false,
  is_active: false,
  login: true,
  showSignUp: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

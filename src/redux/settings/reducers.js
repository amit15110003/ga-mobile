/** @format */

import actions from "./actions";
import store from "store";
const initialState = {
  date: store.get("date") ? store.get("date") : store.set(new Date()),
  city: store.get("city"),
  selectedActivity: [],
  packageHotels: [],
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

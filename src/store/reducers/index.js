import adultCounterReducer from "./adultCounter";
import childCounterReducer from "./childCounter";
import loggedReducer from "./isLogged";
import showReducer from "./isShow";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  adultCounter: adultCounterReducer,
  childCounter: childCounterReducer,
  isLogged: loggedReducer,
  isShow: showReducer
});

export default rootReducers;

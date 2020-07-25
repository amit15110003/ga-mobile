const isLoggedReducer = (state = false, acttion) => {
  switch (acttion.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default isLoggedReducer;

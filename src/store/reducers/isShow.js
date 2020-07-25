const isShowReducer = (show = false, acttion) => {
  switch (acttion.type) {
    case "IS_TOGGLE":
      return !show;
    default:
      return show;
  }
};

export default isShowReducer;

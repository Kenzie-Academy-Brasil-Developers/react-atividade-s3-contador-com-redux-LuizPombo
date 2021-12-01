import { ADD_NUMBER } from "./actionTypes";
import { SUB_NUMBER } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return state + 1;
    case SUB_NUMBER:
      return state - 1;
    default:
      return state;
  }
};

export default reducerCounter;

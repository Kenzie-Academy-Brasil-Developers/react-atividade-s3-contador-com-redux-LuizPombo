import { ADD_NUMBER } from "./actionTypes";
import { SUB_NUMBER } from "./actionTypes";

export const increment = (number) => ({
  type: ADD_NUMBER,
  number: number,
});

export const decrement = (number) => ({
  type: SUB_NUMBER,
  number: number,
});

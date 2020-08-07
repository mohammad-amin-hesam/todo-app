import { AnyAction } from "redux";
import { SET_DATA } from "../types";

const initialList = [];

export const todoList = (state = initialList, action: AnyAction) => {
  switch (action.type) {
    case SET_DATA:
      return [...action.data];

    default:
      return state;
  }
};

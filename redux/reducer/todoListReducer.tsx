import { AnyAction } from "redux";
import { SET_DATA, FETCH_TODO_LIST, FETCH_COMPLETED_LIST } from "../types";

const initialList = {
  list: [],
  type: "All",
};

export const todoList = (state = initialList, action: AnyAction) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, list: [...action.data], type: action.tabType };

    case FETCH_TODO_LIST:
      return {
        ...state,
        list: action.data.filter((item) => item.read === false),
        type: action.tabType,
      };

    case FETCH_COMPLETED_LIST:
      return {
        ...state,
        list: action.data.filter((item) => item.read === true),
        type: action.tabType,
      };

    default:
      return state;
  }
};

import { AnyAction } from "redux";
import { FETCH_TASK } from "../types";

const item = {
  title: "",
  description: "",
  id: "",
  read: false,
};

export const task = (state = item, action: AnyAction) => {
  switch (action.type) {
    case FETCH_TASK:
      return action.item;

    default:
      return state;
  }
};

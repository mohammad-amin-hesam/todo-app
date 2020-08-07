import { combineReducers } from "redux";
import { todoList } from "./todoListReducer";
import { task } from "./fetchTaskReducer";

export default combineReducers({
  todoList,
  task,
});

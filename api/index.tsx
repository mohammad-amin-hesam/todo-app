import {
  SET_DATA,
  FETCH_TASK,
  FETCH_TODO_LIST,
  FETCH_COMPLETED_LIST,
} from "../redux/types";
import { uniq_id } from "../helpers/props";

export default class api {
  getState: () => any;
  dispatch: (obj: {}) => any;
  db: [];

  constructor(obj) {
    const data = localStorage.getItem("todo-list");
    this.getState = obj.getState;
    this.dispatch = obj.dispatch;
    this.db = data ? JSON.parse(data) : [];
  }

  Setter = (data) => {
    localStorage.setItem("todo-list", JSON.stringify(data));
    this.GetAll(this.getState().todoList.type, data);
  };

  GetAll = (type = "All", data = this.db) => {
    switch (type) {
      case "All":
        this.dispatch({
          type: SET_DATA,
          data,
          tabType: type,
        });
        break;

      case "Todo":
        this.dispatch({
          type: FETCH_TODO_LIST,
          data,
          tabType: type,
        });
        break;

      case "Completed":
        this.dispatch({
          type: FETCH_COMPLETED_LIST,
          data,
          tabType: type,
        });
        break;

      default:
        break;
    }
  };

  Get = (id) => {
    this.dispatch({
      type: FETCH_TASK,
      item: this.db.filter((item: any) => item.id === id)[0],
    });
    this.Put(id, { read: true });
  };

  Put = (id, data) => {
    let mirrorDb: any = [...this.db];
    const item = mirrorDb.filter((task: any) => task.id === id)[0];
    if (!item) return;
    const indexOfItem = mirrorDb.indexOf(item);
    mirrorDb[indexOfItem] = { ...item, ...data };
    this.Setter(mirrorDb);
  };

  Post = (data) =>
    this.Setter([...this.db, { ...data, read: false, id: uniq_id() }]);

  Delete = (id) => this.Setter(this.db.filter((item: any) => item.id !== id));
}

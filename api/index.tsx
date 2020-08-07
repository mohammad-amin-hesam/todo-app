export default class api {
  getState: () => any;
  dispatch: () => any;
  db: {};

  constructor(obj) {
    const data = localStorage.getItem("todo-list");
    this.getState = obj.getState;
    this.dispatch = obj.dispatch;
    this.db = data || [];
  }

  Get() {}

  Put() {}

  Post() {}

  Delete() {}
}

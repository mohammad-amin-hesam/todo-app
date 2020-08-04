export default class api {
  getState: () => any;
  dispatch: () => any;

  constructor(obj) {
    this.getState = obj.getState;
    this.dispatch = obj.dispatch;
  }

  Get(url, params) {}

  Put(url, params) {}

  Post(url, params) {}

  Delete(url, data) {}
}

export const fetchTasks = (type = "All") => (dispatch, getState, { Api }) => {
  const api = new Api({ dispatch, getState });
  api.GetAll(type);
};

export const fetchTask = (id) => (dispatch, getState, { Api }) => {
  const api = new Api({ dispatch, getState });
  api.Get(id);
};

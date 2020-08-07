export const fetchTasks = () => (dispatch, getState, { Api }) => {
  const api = new Api({ dispatch, getState });
  api.GetAll();
};

export const fetchTask = (id) => (dispatch, getState, { Api }) => {
  const api = new Api({ dispatch, getState });
  api.Get(id);
};

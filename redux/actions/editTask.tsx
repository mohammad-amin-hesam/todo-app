export const editTask = (id, data) => (dispatch, getState, { Api }) => {
  const api = new Api({ dispatch, getState });

  api.Put(id, data);
};

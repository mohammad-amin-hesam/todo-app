export const deleteTask = (id) => (dispatch, getState, { Api }) => {
  const api = new Api({ dispatch, getState });

  api.Delete(id);
};

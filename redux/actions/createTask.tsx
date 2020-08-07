import Router from "next/router";

export const createTask = (data) => (dispatch, getState, { Api }) => {
  const api = new Api({ dispatch, getState });

  api.Post(data);
  Router.push("/");
};

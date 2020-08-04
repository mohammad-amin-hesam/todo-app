import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { MakeStore } from "next-redux-wrapper";
import reducer from "./reducer";
import thunk from "redux-thunk";
import Api from "../api";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const makeStore: MakeStore = (initialState) => {
  const composeEnhancers =
    (typeof window !== "undefined" &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({ Api })))
  );

  if ((module as any).hot) {
    (module as any).hot.accept("./reducer", () => {
      console.log("Replacing reducer");
      store.replaceReducer(require("./reducer").default);
    });
  }

  let persistor = persistStore(store);

  return store;
};

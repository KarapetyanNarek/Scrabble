import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import { isDevelopment } from "../constants/environment.constant";

import preloadedState from "./preloadedState";

let store;

export default function configuration() {
  const middleware = [];
  if (isDevelopment) {
    const logger = createLogger({
      collapsed: true,
    });

    middleware.push(logger);
  }

  store = configureStore({
    reducer: rootReducer(),
    // middleware,
    devTools: isDevelopment,
    enhancers: [],
    preloadedState,
  });

  return store;
}

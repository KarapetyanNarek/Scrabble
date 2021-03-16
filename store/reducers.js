import { combineReducers } from "@reduxjs/toolkit";

import { globalSlice } from "./global/globalSlice";

const reducers = {
  global: globalSlice.reducer,
};

export default combineReducers(reducers);

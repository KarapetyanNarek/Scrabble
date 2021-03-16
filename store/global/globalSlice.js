import { createSlice } from "@reduxjs/toolkit";
import { initialGlobalState } from "./initialState";

export const globalSlice = createSlice({
  name: "global",
  initialState: initialGlobalState(),
  reducers: {
    setCount(state, action) {
      state.count = state.count + 1;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

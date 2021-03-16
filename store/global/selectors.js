import { createSelector } from "reselect";

const globalSelector = (state) => state.global;

const countSelector = createSelector(
  [globalSelector],
  (global) => global.count
);

export default {
  countSelector,
};

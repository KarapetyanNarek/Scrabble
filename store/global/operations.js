import { globalSlice } from "./globalSlice";

const incrementCount = () => {
  const { setCount } = globalSlice.actions;

  return (dispatch) => dispatch(setCount());
};

export default {
  incrementCount,
};

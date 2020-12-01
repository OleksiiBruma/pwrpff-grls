import { SHOW_LOADER, HIDE_LOADER } from "Redux/types";

const initialState = {
  loading: false,
};

const appReducer = (state = initialState, { type }) => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default appReducer;

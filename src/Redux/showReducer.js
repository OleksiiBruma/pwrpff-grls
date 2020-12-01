import { SHOW_RECEIVED } from "Redux/types";

const initialState = {
  image: {
    medium: null,
  },
  summary: null,
  name: null,
};
const showReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_RECEIVED:
      return payload;
    default:
      return state;
  }
};

export default showReducer;

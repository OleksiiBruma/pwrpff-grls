import { EPISODES_RECEIVED } from "Redux/types";

const initialState = [];
const episodesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EPISODES_RECEIVED:
      return payload;
    default:
      return state;
  }
};

export default episodesReducer;

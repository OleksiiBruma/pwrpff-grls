import { EPISODE_RECEIVED } from "Redux/types";

const initialState = {
};
const episodeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EPISODE_RECEIVED:
      return payload;
    default:
      return state;
  }
};

export default episodeReducer;

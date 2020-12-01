import { combineReducers } from "redux";
import showReducer from "Redux/showReducer";
import episodeReducer from "Redux/episodeReducer";
import episodesReducer from "Redux/episodesReducer";
import appReducer from "Redux/appReducer";

const rootReducer = combineReducers({
  show: showReducer,
  episodes: episodesReducer,
  episode: episodeReducer,
  app: appReducer,
});
export default rootReducer;

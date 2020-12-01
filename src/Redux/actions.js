import {
  SHOW_REQUESTED,
  EPISODE_REQUESTED,
  EPISODES_REQUESTED,
  SHOW_LOADER,
  HIDE_LOADER,
} from "Redux/types";

export const requestShow = (payload) => ({
  type: SHOW_REQUESTED,
  payload,
});
export const requestEpisode = (payload) => ({
  type: EPISODE_REQUESTED,
  payload,
});
export const requestEpisodes = (payload) => ({
  type: EPISODES_REQUESTED,
  payload,
});
export const hideLoader = () => ({
  type: HIDE_LOADER,
});
export const showLoader = () => ({
  type: SHOW_LOADER,
});

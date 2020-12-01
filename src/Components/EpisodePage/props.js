import { requestEpisode } from "Redux/actions";

const props = [
  (state) => ({
    episode: {
      image: state.episode.image && state.episode.image.medium,
      summary: state.episode.summary || "No description yet :(",
      name: state.episode.name,
      season: state.episode.season,
      number: state.episode.number,
    },
    isLoading: state.app.loading,
  }),
  (dispatch) => ({
    requestEpisode: (id) => {
      dispatch(requestEpisode(id));
    },
  }),
];

export default props;

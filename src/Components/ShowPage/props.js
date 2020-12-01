import { requestShow, requestEpisodes } from "Redux/actions";

const props = [
  (state) => ({
    episodes: state.episodes,
    show: {
      image: state.show.image.medium,
      summary: state.show.summary,
      name: state.show.name,
    },
    isLoading: state.app.loading,
  }),
  (dispatch) => ({
    requestShow: (id) => {
      dispatch(requestShow(id));
    },
    requestEpisodes: (id) => {
      dispatch(requestEpisodes(id));
    },
  }),
];

export default props;

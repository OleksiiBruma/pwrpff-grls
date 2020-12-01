import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import Card from "Components/Card";

const EpisodePage = ({ episode, requestEpisode }) => {
  const { id } = useParams();
  useEffect(() => {
    if (requestEpisode) {
      requestEpisode(id);
    }
  }, [requestEpisode, id]);

  return (
    <>
      <Card
        data-testid="episode"
        image={episode.image}
        summary={episode.summary}
        name={episode.name}
      />
    </>
  );
};
EpisodePage.defaultProps = {
  episode: {
    image: "",
    summary: "Nothing to show :(",
    name: "Should be title here",
  },
  requestEpisode: null,
};

EpisodePage.propTypes = {
  episode: PropTypes.shape({
    image: PropTypes.string,
    summary: PropTypes.string,
    name: PropTypes.string,
  }),
  requestEpisode: PropTypes.func,
};

export default EpisodePage;

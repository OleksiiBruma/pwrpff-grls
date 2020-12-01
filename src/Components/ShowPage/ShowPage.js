import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";

import useStyles from "Components/ShowPage/styles";
import Card from "Components/Card";
import ListItem from "Components/ListItem";
import Episode from "Components/Episode";

const ShowPage = ({
  requestShow, requestEpisodes, show, episodes,
}) => {
  const { id } = useParams();
  useEffect(() => {
    requestShow(id);
    requestEpisodes(id);
  }, [requestShow, requestEpisodes, id]);
  const [showMore, setShowMore] = useState(true);
  const classes = useStyles();

  if ((episodes && !episodes.length) || !show) {
    return null;
  }

  const episodesToShow = () => {
    const episodeCallback = (episode) => (
      <Link
        key={episode.id}
        to={`/episode/${episode.id}`}
        style={{ textDecoration: "none" }}
      >
        <ListItem>
          <Episode
            season={episode.season}
            name={episode.name}
            airtime={episode.airtime}
          />
        </ListItem>
      </Link>
    );
    return showMore
      ? episodes.slice(0, 3).map((episode) => episodeCallback(episode))
      : episodes.map((episode) => episodeCallback(episode));
  };
  return (
    <>
      <Card
        image={show.image}
        summary={show.summary}
        name={show.name}
        key="show"
      />
      <Card titleSize="Small" name="Episodes" key="episodes">
        <ul className={classes.list}>
          {episodesToShow()}
          {showMore && (
            <ListItem onClick={() => setShowMore(false)}>Show More</ListItem>
          )}
        </ul>
      </Card>
    </>
  );
};
ShowPage.defaultProps = {
  requestShow: null,
  requestEpisodes: null,
  show: null,
  episodes: null,
};

ShowPage.propTypes = {
  requestShow: PropTypes.func,
  requestEpisodes: PropTypes.func,
  show: PropTypes.shape({
    image: PropTypes.string,
    summary: PropTypes.string,
    name: PropTypes.string,
  }),

  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        medium: PropTypes.string,
      }),
      summary: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

export default ShowPage;

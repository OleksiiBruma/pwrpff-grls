import React from "react";
import PropTypes from "prop-types";

import useStyles from "Components/Episode/styles";

const Episode = ({ season, name, airtime }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.season}>
        {`Season ${season}`}
      </div>
      <div className={classes.name}>{name}</div>
      <div className={classes.airtime}>{airtime}</div>
    </div>
  );
};

Episode.defaultProps = {
  season: "",
  name: "Waiting for title",
  airtime: "",
};

Episode.propTypes = {
  season: PropTypes.number,
  name: PropTypes.string,
  airtime: PropTypes.string,
};

export default Episode;

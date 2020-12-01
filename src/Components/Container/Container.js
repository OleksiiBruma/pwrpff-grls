import React from "react";
import PropTypes from "prop-types";
import useStyles from "Components/Container/styles";

const Container = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

export default Container;

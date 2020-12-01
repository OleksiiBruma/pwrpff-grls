import React from "react";
import PropTypes from "prop-types";
import useStyles from "Components/AppWrapper/styles";

const AppWrapper = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>{children}</div>
    </div>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

export default AppWrapper;

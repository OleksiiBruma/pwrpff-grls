import React from "react";
import PropTypes from "prop-types";
import useStyles from "Components/Title/styles";

const Title = ({ children, appearance }) => {
  const classes = useStyles();
  const classNames = `${classes.title} ${
    appearance === "Small" && classes.titleSmall
  }`;
  return <h2 className={classNames}>{children}</h2>;
};

Title.defaultProps = {
  appearance: "",
};

Title.propTypes = {
  appearance: PropTypes.oneOf(["Small", ""]),
  children: PropTypes.node.isRequired,
};

export default Title;

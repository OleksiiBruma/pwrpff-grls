import React from "react";
import PropTypes from "prop-types";
import useStyles from "Components/ListItem/styles";

const ListItem = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <li onClick={onClick} className={classes.container}>
      {children}
    </li>
  );
};

ListItem.defaultProps = {
  onClick: null,
  children: null,
};

ListItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

export default ListItem;

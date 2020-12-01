import React from "react";
import useStyles from "Components/Header/styles";

const Header = () => {
  const classes = useStyles();
  return <header data-testid="header" className={classes.header} />;
};

export default Header;

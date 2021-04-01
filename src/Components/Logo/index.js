import React from "react";
import useStyles from "Components/Logo/styles";

export const Logo = () => {
  const classes = useStyles();
  return <p className={classes.logo}>Serials APP</p>;
};

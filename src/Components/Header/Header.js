import React from "react";
import useStyles from "Components/Header/styles";
import { Logo } from "Components/Logo";

import Search from "Components/Search";

const Header = () => {
  const classes = useStyles();
  return (
    <header data-testid="header" className={classes.header}>
      <div className={classes.wrapper}>
        <Logo /> <Search />
      </div>
    </header>
  );
};

export default Header;

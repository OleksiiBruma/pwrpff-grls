import React from "react";
import PropTypes from "prop-types";

import useStyles from "Components/Card/styles";
import Title from "Components/Title";
import { checkHtmlForScript } from "Utils/helpers";
import Loader from "Components/Loader";

const Card = ({
  image,
  summary: rawSummary,
  name,
  titleSize,
  children,
  isLoading,
}) => {
  const classes = useStyles();
  const summary = rawSummary && checkHtmlForScript(rawSummary);
  if (isLoading) {
    return (
      <div data-testid="loader" className={classes.loader}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={classes.card}>
      <Title appearance={titleSize} className={classes.title}>
        {name}
      </Title>
      <section className={classes.content}>
        {image && (
          <div className={classes.image}>
            <img data-testid="image" src={image} alt={`${name} cover`} />
          </div>
        )}
        {summary && <p className={classes.summary}>{summary}</p>}
        {children}
      </section>
    </div>
  );
};
Card.defaultProps = {
  image: "",
  summary: "",
  name: "Should be title here",
  titleSize: "",
  children: null,
  isLoading: true,
};

Card.propTypes = {
  image: PropTypes.string,
  summary: PropTypes.string,
  name: PropTypes.string,
  titleSize: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  isLoading: PropTypes.bool,
};

export default Card;

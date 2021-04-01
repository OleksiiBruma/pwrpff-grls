import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import useStyles from "Components/Search/styles";
import { ReactComponent as SearchIcon } from "assets/searchIcon.svg";
import { useOnClickOutside } from "Hooks/OnClickOutside";
import API from "Utils/api";

export const Search = () => {
  const history = useHistory();
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(async () => {
    const { data } = await API.get(`/search/shows?q=${searchTerm}`);
    const shows = data.map(({ show: { name, id } }) => ({ name, id }));
    setSuggestions(shows);
    setIsOpen(true);
  }, [searchTerm]);
  const classes = useStyles();
  const onFormChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });
  const onInputFocus = () => {
    setIsOpen(true);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (suggestions) {
      history.push(`/show/${suggestions[0].id}`);
    }
  };
  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <div className={classes.wrapper}>
        <input
          placeholder="Search"
          className={classes.input}
          onChange={onFormChange}
          onFocus={onInputFocus}
          value={searchTerm}
        />
        {isOpen && (
          <div className={classes.suggestions} ref={ref}>
            {suggestions.map(({ name, id }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={id}
                to={`/show/${id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p className={classes.suggestionsItem}>{name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <button className={classes.button}>
        <SearchIcon className={classes.icon} />
      </button>
    </form>
  );
};

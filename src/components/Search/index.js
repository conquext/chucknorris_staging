import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import Loading from "../Loading";
import "./index.css";

import AutorenewRoundedIcon from "@material-ui/icons/AutorenewRounded";

const searchStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  loadingDisabled: {
    cursor: "not-allowed",
    pointerEvents: "none",
  },
}));

const Search = ({
  searchJokes,
  setJokesError,
  resetQuery,
  isLoading,
  getARandomJoke,
}) => {
  const classes = searchStyles();
  const [query, setQuery] = React.useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query && query.length > 2) searchJokes(query);
    else {
      if (!query) resetQuery();
      else
        setJokesError({
          message: "Search term must have atleast 3 characters.",
        });
    }
  };

  const handleInputChange = (e) => {
    if (e && e.target) setQuery(e.target.value);
    if (e && e.target && e.target.value && e.target.value.length > 2) {
      searchJokes(e.target.value);
    }
    if (!e.target.value) resetQuery();
  };

  return (
    <Paper component="form" className={`${classes.root} search-box`}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        label="Multiline Placeholder"
        placeholder="Try: Chuck Norris kick"
        inputProps={{ "aria-label": "search chuck norris facts" }}
        onChange={handleInputChange}
      />
      <Tooltip title={isLoading ? "Searching ... " : "Search"}>
        <IconButton
          type="submit"
          className={`${classes.iconButton} ${
            isLoading ? classes.loadingDisabled : ""
          }`}
          aria-label="search"
          onClick={handleSearch}
        >
          {isLoading ? <Loading type="search" /> : <SearchIcon />}
        </IconButton>
      </Tooltip>
      <Divider className={classes.divider} orientation="vertical" />
      <Tooltip title={isLoading ? "" : "Random"}>
        <IconButton
          color="primary"
          className={`${classes.iconButton} ${
            isLoading ? classes.disabled : ""
          }`}
          aria-label="searchRandom"
          onClick={getARandomJoke}
        >
          <AutorenewRoundedIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

export default Search;

Search.propTypes = {
  searchJokes: PropTypes.func.isRequired,
  setJokesError: PropTypes.func.isRequired,
  resetQuery: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getARandomJoke: PropTypes.func.isRequired,
};

import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppContext } from "../../store";
import Header from "../Header";
import Hero from "../Hero";
import Error from "../Error";
import Loading from "../Loading";
import JokesContainer from "../JokesContainer";
import NoJokes from "../NoJokes";
import {
  resetQuery,
  searchJokesLoading,
  searchJokes,
  searchJokesError,
} from "../../store/actions";
import axios from "axios";

export default function Album() {
  const { state, dispatch } = useContext(AppContext);

  const {
    error,
    query,
    searchError,
    isLoading,
    isSearching,
    jokes,
    hasError,
  } = state;

  const searchForJokes = (arg) => {
    dispatch(searchJokesLoading(true));

    let url = `https://api.chucknorris.io/jokes/search?query=${arg}`;
    axios
      .get(url)
      .then(({ data }) => {
        const jokes = data && data.result ? data.result : [];
        dispatch(searchJokes(arg, jokes));
      })
      .catch((err) => dispatch(searchJokesError(err)))
      .finally(() => dispatch(searchJokesLoading(false)));
  };

  const searchForARandomJoke = () => {
    dispatch(resetQuery());

    let url = `https://api.chucknorris.io/jokes/random`;
    axios
      .get(url)
      .then(({ data }) => {
        const jokes = data ? [data] : [];
        dispatch(searchJokes("", jokes));
      })
      .catch((err) => dispatch(searchJokesError(err)))
      .finally(() => dispatch(searchJokesLoading(false)));
  };

  const setJokesError = (err) => dispatch(searchJokesError(err));

  const handleQueryReset = () => {
    dispatch(resetQuery());
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <div id="back-to-top-anchor" />
      <Hero
        searchJokes={searchForJokes}
        resetQuery={handleQueryReset}
        setJokesError={setJokesError}
        getARandomJoke={searchForARandomJoke}
        isLoading={isSearching}
      />
      {isLoading && <Loading type="page" />}
      {hasError && !isLoading && !isSearching && <Error error={error} />}
      {!hasError && !isLoading && (
        <main>
          {searchError && <Error error={error} />}
          {jokes && !!jokes.length && <JokesContainer jokes={jokes} />}
          {query && jokes && jokes.length === 0 && <NoJokes query={query} />}
        </main>
      )}
    </React.Fragment>
  );
}

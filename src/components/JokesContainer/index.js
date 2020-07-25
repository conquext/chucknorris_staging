import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import JokesList from "../JokesList";
import Pagination from "../Pagination";
import { paginate } from "../../utils";
import "./index.css";

const jokeStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  header: {
    ...theme.typography.button,
    padding: theme.spacing(1),
    fontWeight: "bold",
    textAlign: "left",
  },
}));

const JokesContainer = ({ jokes = [] }) => {
  const classes = jokeStyles();
  const [pageSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    const anchor = document.querySelector("#back-to-first-joke-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    return setCurrentPage(page);
  };

  const currentJokes = paginate(jokes, currentPage, pageSize);

  const totalJokes = jokes.length;
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {totalJokes > pageSize ? <div id="back-to-first-joke-anchor" /> : ""}
      <section className="jokes-list">
        {totalJokes > 1 && (
          <div className={classes.header}>{`${totalJokes} matches`}</div>
        )}
        <JokesList jokes={currentJokes} />
      </section>
      <Pagination
        itemsCount={jokes.length}
        pageSize={pageSize}
        setPage={handlePageChange}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default JokesContainer;

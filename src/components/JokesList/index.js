import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";
import Joke from "../Joke";

const jokeStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  list: {
    display: "block",
    marginBottom: "1rem",
  },
}));

const JokesList = ({ jokes = [] }) => {
  const classes = jokeStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <List component="nav" aria-label="jokes">
        {jokes.map((joke, index) => (
          <Paper elevation={2} className={`${classes.list} a-joke`} key={index}>
            <Joke joke={joke} />
          </Paper>
        ))}
      </List>
    </Container>
  );
};

export default JokesList;

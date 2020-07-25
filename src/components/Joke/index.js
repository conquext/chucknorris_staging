import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const jokeStyles = makeStyles(() => ({
  overflow: {
    overflow: "auto",
    wordWrap: "break-word",
  },
}));

export default function index({ joke }) {
  const classes = jokeStyles();
  if (joke && joke.value && joke.icon_url)
    return (
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="a joke some fun" src={joke.icon_url} />
        </ListItemAvatar>
        <ListItemText primary={joke.value} className={classes.overflow} />
      </ListItem>
    );
  return null;
}

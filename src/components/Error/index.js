import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const errorStyle = makeStyles((theme) => ({
  errorContent: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.color.error,
    padding: theme.spacing(8, 0, 6),
  },
  errorButtons: {
    marginTop: theme.spacing(2),
  },
}));

export default function index({ error }) {
  const classes = errorStyle();
  return (
    <div className={classes.errorContent}>
      {error && typeof error === "string" ? (
        <h4>{error}</h4>
      ) : (
        <h4>Oops! Something went wrong...</h4>
      )}
    </div>
  );
}

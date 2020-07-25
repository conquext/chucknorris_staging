import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    color: theme.palette.color.error,
    padding: theme.spacing(1),
  },
}));

const NoJokes = ({ query }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {`No Matches for "${query}". Try another search term.`}
    </div>
  );
};

export default NoJokes;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  smallIcon: {
    width: "20px !important",
    height: "20px !important",
  },
}));

export default function Loading({ type = "page" }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {type === "page" && <CircularProgress />}
      {type === "search" && (
        <CircularProgress className={classes.smallIcon} color="secondary" />
      )}
    </div>
  );
}

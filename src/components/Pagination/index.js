import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import PropTypes from "prop-types";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationComponent = ({
  itemsCount,
  pageSize = 1,
  setPage,
  currentPage,
}) => {
  const classes = useStyles();
  if (pageSize < 1) return null;
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={pagesCount}
        showFirstButton
        showLastButton
        page={currentPage}
        onChange={handleChange}
      />
    </div>
  );
};

export default PaginationComponent;

PaginationComponent.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

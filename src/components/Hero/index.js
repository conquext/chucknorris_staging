import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import PropTypes from "prop-types";
import { importAll } from "../../utils";
import Search from "../Search";
import "./index.css";

const chuckImages = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const allChuckImages = Object.keys(chuckImages);

const heroStyle = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.light,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    textAlign: "center",
    width: "100%",
  },
}));

const Hero = ({
  searchJokes,
  resetQuery,
  setJokesError,
  getARandomJoke,
  isLoading,
}) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();

  const classes = heroStyle();

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm" className="hero__parent">
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          interval={20000}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {allChuckImages.map((img, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={chuckImages[img]} alt={img} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <div className={classes.heroButtons}>
          <Grid container spacing={4} justify="center">
            <Search
              searchJokes={searchJokes}
              resetQuery={resetQuery}
              setJokesError={setJokesError}
              getARandomJoke={getARandomJoke}
              isLoading={isLoading}
            />
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  searchJokes: PropTypes.func.isRequired,
  resetQuery: PropTypes.func.isRequired,
  setJokesError: PropTypes.func.isRequired,
  getARandomJoke: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

// Actions
const PAGE_LOADING = "PAGE_LOADING";
const JOKES_LOADING = "JOKES_LOADING";
const SEARCH_JOKES = "SEARCH_JOKES";
const JOKES_SEARCH_SUCCESS = "JOKES_SEARCH_SUCCESS";
const JOKES_SEARCH_ERROR = "JOKES_SEARCH_ERROR";
const RESET_QUERY = "RESET_QUERY";

// Action creators
export const resetQuery = () => ({
  type: RESET_QUERY,
  payload: null,
});

export const pageLoading = (isPageLoading) => ({
  type: PAGE_LOADING,
  payload: isPageLoading,
});

export const searchJokesLoading = (isLoading) => ({
  type: JOKES_LOADING,
  payload: isLoading,
});

export const searchJokes = (query, jokes) => ({
  type: SEARCH_JOKES,
  payload: { jokes, query },
});

export const searchJokesSuccess = (jokes) => ({
  type: JOKES_SEARCH_SUCCESS,
  payload: jokes,
});

export const searchJokesError = (error) => ({
  type: JOKES_SEARCH_ERROR,
  payload: error.message,
});

export const actionCreators = {
  resetQuery,
  pageLoading,
  searchJokes,
  searchJokesLoading,
  searchJokesSuccess,
  searchJokesError,
};

export const actions = {
  RESET_QUERY,
  PAGE_LOADING,
  SEARCH_JOKES,
  JOKES_LOADING,
  JOKES_SEARCH_SUCCESS,
  JOKES_SEARCH_ERROR,
};

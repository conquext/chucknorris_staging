import { actions } from "./actions";

const {
  RESET_QUERY,
  PAGE_LOADING,
  JOKES_LOADING,
  SEARCH_JOKES,
  JOKES_SEARCH_ERROR,
  JOKES_SEARCH_SUCCESS,
} = actions;

export const initialState = {
  jokes: [],
  isLoading: false,
  isSearching: false,
  error: false,
  searchError: null,
  query: "",
};

// Reducers
const REDUCERS = {
  [RESET_QUERY]: () => initialState,
  [PAGE_LOADING]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),

  [JOKES_LOADING]: (state, action) => ({
    ...state,
    isSearching: action.payload,
  }),

  [SEARCH_JOKES]: (state, action) => ({
    ...state,
    jokes: action.payload.jokes,
    hasError: false,
    query: action.payload.query,
  }),

  [JOKES_SEARCH_SUCCESS]: (state, action) => ({
    ...state,
    jokes: action.payload,
    hasError: false,
    isSearching: false,
  }),

  [JOKES_SEARCH_ERROR]: (state, action) => ({
    ...state,
    error: action.payload,
    hasError: true,
    isLoading: false,
    isSearching: false,
  }),
};

const reducer = (state = initialState, action) => {
  const handler = REDUCERS[action.type];
  return handler ? handler(state, action) : state;
};

export default reducer;

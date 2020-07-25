import React from "react";
import reducer, { initialState } from "./reducers";

export const AppContext = React.createContext();

export default (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

import * as React from "react";
import Context from "./Context";
import logger from "./logger";
import reducer, { initialState } from "./reducer";

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(logger(reducer), initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Provider;

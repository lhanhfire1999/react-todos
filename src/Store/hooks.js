import React from "react";
import Context from "./Context";

export const useStore = () => {
  return React.useContext(Context);
};

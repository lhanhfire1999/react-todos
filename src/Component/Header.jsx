import React from "react";
import { Actions } from "../Store";

const Header = ({ dispatch }) => {
  const handleKeyup = (e) => {
    if (e.keyCode === 13) {
      dispatch(Actions.addTodo(e.target.value));
      e.target.value = null;
    }
  };

  return (
    <header className="header">
      {console.log("Header re-render")}
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyUp={handleKeyup}
      />
    </header>
  );
};

export default React.memo(Header);

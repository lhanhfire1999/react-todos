import React from "react";
import { Actions, useStore } from "../Store";
import GeneralMethod from "../Utils/generalMethod";
import FilterMode from "./FilterMode";

const Footer = () => {
  const [globalState, dispatch] = useStore();

  const mode = React.useMemo(() => {
    const countUncompleted = globalState.todos.filter(
      (todo) => !todo.completed
    ).length;
    const completedFlag = globalState.todos.some((todo) => todo.completed);
    return { countUncompleted, completedFlag };
  }, [globalState.todos]);

  const handleClearBtn = () => {
    dispatch(Actions.clearCompleted());
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{mode.countUncompleted}</strong> item left
      </span>
      <ul className="filters">
        {Object.keys(GeneralMethod.filterMode).map((filterName, index) => (
          <FilterMode
            key={index}
            currentFilter={globalState.filter}
            filterName={filterName}
            dispatch={dispatch}
          />
        ))}
      </ul>
      {mode.completedFlag && (
        <button className="clear-completed" onClick={handleClearBtn}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;

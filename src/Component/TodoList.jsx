import React from "react";
import { Actions, useStore } from "../Store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [state, dispatch] = useStore();

  const checkAllCompleted = React.useMemo(() => {
    const check = state.todos.every((todo) => todo.completed === true);
    return check;
  }, [state.todos]);

  const handleChangeAllBtn = (e) => {
    dispatch(Actions.toggleAllCompleted(e.target.checked));
  };

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={checkAllCompleted}
        onChange={handleChangeAllBtn}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {state.todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;

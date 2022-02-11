import React from "react";
import { Actions, useStore } from "../Store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [state, dispatch] = useStore();
  const [editIndex, setEditIndex] = React.useState(null);

  const handleEdit = {
    handleOnEdit(id) {
      setEditIndex(id);
    },
    handleOffEdit() {
      setEditIndex(null);
    },
  };

  const handleChangeAllBtn = (e) => {
    dispatch(Actions.toggleAllCompleted(e.target.checked));
  };

  const checkAllCompleted = React.useMemo(() => {
    const check = state.todos.every((todo) => todo.completed === true);
    return check;
  }, [state.todos]);

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
        {state.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editIndex={editIndex}
            onEdit={handleEdit}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;

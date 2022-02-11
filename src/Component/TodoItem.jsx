import clsx from "clsx";
import React from "react";
import { Actions } from "../Store";

const TodoItem = ({ todo, dispatch }) => {
  const { id, content, completed } = todo;
  const [state, setState] = React.useState({ edit: content, editIndex: null });

  const handleChangeEdit = (e) => {
    setState((prev) => ({ ...prev, edit: e.target.value }));
  };

  const handleOnEdit = (id) => {
    setState((prev) => ({ ...prev, editIndex: id }));
  };

  const handleOffEdit = (id) => {
    const payload = { id, content: state.edit };

    setState((prev) => ({ ...prev, editIndex: null }));
    dispatch(Actions.editContent(payload));
  };

  const handleDelete = (id) => {
    dispatch(Actions.deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(Actions.toggleCompleted(id));
  };

  return (
    <li
      className={clsx({
        completed: completed,
        editing: state.editIndex === id,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => handleToggle(id)}
        />
        <label onClick={() => handleOnEdit(id)}>{state.edit}</label>
        <button className="destroy" onClick={() => handleDelete(id)}></button>
      </div>
      <input
        className="edit"
        value={state.edit}
        onChange={handleChangeEdit}
        onBlur={() => handleOffEdit(id)}
      />
    </li>
  );
};
export default TodoItem;

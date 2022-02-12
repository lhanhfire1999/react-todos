import clsx from "clsx";
import React from "react";
import { Actions } from "../Store";

const TodoItem = ({ todo, editIndex, onEdit, dispatch }) => {
  const { id, content, completed } = todo;
  const [inputEdit, setInputEdit] = React.useState(content);

  const handleChangeEdit = (e) => {
    setInputEdit(e.target.value);
  };

  const handleOnEdit = () => {
    onEdit.handleOnEdit(id);
  };

  const handleOffEdit = {
    onBlur() {
      if (inputEdit.trim() !== content) {
        const payload = { id, content: inputEdit.trim() };
        onEdit.handleOffEdit();
        dispatch(Actions.editContent(payload));
      }

      setInputEdit(inputEdit.trim());
      onEdit.handleOffEdit();
      return null;
    },
    keyUp(e) {
      if (e.keyCode === 27) {
        setInputEdit(content);
        onEdit.handleOffEdit();
      } else if (e.keyCode === 13) {
        this.onBlur();
      }
    },
  };

  const handleDelete = () => {
    dispatch(Actions.deleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(Actions.toggleCompleted(id));
  };

  return (
    <li
      className={clsx({
        completed: completed,
        editing: editIndex === id,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleToggle}
        />
        <label onClick={handleOnEdit}>{content}</label>
        <button className="destroy" onClick={handleDelete}></button>
      </div>
      <input
        className="edit"
        value={inputEdit}
        onChange={handleChangeEdit}
        onBlur={handleOffEdit.onBlur}
        onKeyUp={(e) => handleOffEdit.keyUp(e)}
      />
    </li>
  );
};

export default TodoItem;

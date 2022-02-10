import clsx from "clsx";
import { Actions } from "../Store";
const TodoItem = ({ todo, dispatch }) => {
  const { id, content, completed } = todo;

  const handleDelete = (id) => {
    dispatch(Actions.deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(Actions.toggleCompleted(id));
  };

  return (
    <li className={clsx({ completed: completed })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => handleToggle(id)}
        />
        <label>{content}</label>
        <button className="destroy" onClick={() => handleDelete(id)}></button>
      </div>
      {/* <input className="edit" value="Create a TodoMVC template" /> */}
    </li>
  );
};
export default TodoItem;

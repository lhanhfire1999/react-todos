import { useStore } from "../Store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [state, dispatch] = useStore();

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
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

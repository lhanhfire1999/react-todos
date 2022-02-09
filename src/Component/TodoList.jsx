import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <TodoItem />
      </ul>
    </section>
  );
};

export default TodoList;

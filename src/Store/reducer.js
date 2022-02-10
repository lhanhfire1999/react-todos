import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from "./constants";

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.todos.length + 1,
        content: action.payload,
        completed: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case DELETE_TODO:
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: newTodos };

    case TOGGLE_COMPLETED:
      // const updateCompleted = state.todos.map(({ id, content, completed }) => {
      //   if (id === action.payload) {
      //     return { id, content, completed: !completed };
      //   }
      //   return { id, content, completed };
      // });
      const newState = JSON.parse(JSON.stringify(state));
      newState.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          console.log(state);
        }
      });
      return newState;

    default:
      throw new Error("Invalid action");
  }
};

export { initialState };
export default reducer;

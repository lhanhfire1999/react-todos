import { ADD_TODO } from "./constants";

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

    default:
      throw new Error("Invalid action");
  }
};

export { initialState };
export default reducer;

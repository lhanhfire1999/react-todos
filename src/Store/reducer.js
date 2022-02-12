import GeneralMethod from "../Utils/generalMethod";
import helperStorage from "../Utils/storage";
import {
  ADD_TODO,
  CHANGE_FILTER,
  CLEAR_COMPLETED,
  DELETE_TODO,
  EDIT_CONTENT,
  TOGGLE_ALL_COMPLETED,
  TOGGLE_COMPLETED,
} from "./constants";

const initialState = {
  todos: helperStorage.get,
  filter: "all",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: GeneralMethod.randomId(state.todos),
        content: action.payload,
        completed: false,
      };
      return helperStorage.save({ ...state, todos: [...state.todos, newTodo] });
    }

    case DELETE_TODO: {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return helperStorage.save({ ...state, todos: newTodos });
    }

    case TOGGLE_COMPLETED: {
      const newTodos = state.todos.reduce((prev, curr) => {
        if (curr.id === action.payload) {
          prev.push({ ...curr, completed: !curr.completed });
        } else {
          prev.push({ ...curr });
        }
        return prev;
      }, []);
      return helperStorage.save({ ...state, todos: newTodos });

      // const updateCompleted = state.todos.map(({ id, content, completed }) => {
      //   if (id === action.payload) {
      //     return { id, content, completed: !completed };
      //   }
      //   return { id, content, completed };
      // });

      // const newState = JSON.parse(JSON.stringify(state));
      // newState.todos.forEach((todo) => {
      //   if (todo.id === action.payload) {
      //     todo.completed = !todo.completed;
      //   }
      // });
    }

    case EDIT_CONTENT: {
      const newTodos = state.todos.reduce((prev, curr) => {
        if (curr.id === action.payload.id) {
          prev.push({ ...curr, content: action.payload.content });
        } else {
          prev.push({ ...curr });
        }
        return prev;
      }, []);
      return helperStorage.save({ ...state, todos: newTodos });
    }

    case TOGGLE_ALL_COMPLETED: {
      const newTodos = state.todos.reduce((prev, curr) => {
        prev.push({ ...curr, completed: action.payload });
        return prev;
      }, []);

      return helperStorage.save({ ...state, todos: newTodos });
    }

    case CLEAR_COMPLETED: {
      const newTodos = state.todos.filter((todo) => todo.completed === false);
      return helperStorage.save({ ...state, todos: newTodos });
    }

    case CHANGE_FILTER: {
      return { ...state, filter: action.payload };
    }

    default:
      throw new Error("Invalid action");
  }
};

export { initialState };
export default reducer;

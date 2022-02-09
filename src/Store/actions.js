import { ADD_TODO } from "./constants";

const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export { addTodo };

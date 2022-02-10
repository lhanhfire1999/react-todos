import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from "./constants";

const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

const toggleCompleted = (payload) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: payload,
  };
};

export { addTodo, deleteTodo, toggleCompleted };

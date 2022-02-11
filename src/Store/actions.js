import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  EDIT_CONTENT,
} from "./constants";

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

const editContent = (payload) => {
  return {
    type: EDIT_CONTENT,
    payload: payload,
  };
};

export { addTodo, deleteTodo, toggleCompleted, editContent };

import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  EDIT_CONTENT,
  TOGGLE_ALL_COMPLETED,
  CLEAR_COMPLETED,
  CHANGE_FILTER,
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

const toggleAllCompleted = (payload) => {
  return {
    type: TOGGLE_ALL_COMPLETED,
    payload: payload,
  };
};
const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
const changeFilter = (payload) => {
  return {
    type: CHANGE_FILTER,
    payload: payload,
  };
};

export {
  addTodo,
  deleteTodo,
  toggleCompleted,
  editContent,
  toggleAllCompleted,
  clearCompleted,
  changeFilter,
};

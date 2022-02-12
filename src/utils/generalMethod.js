class GeneralMethod {
  static filterMode = {
    all(todo) {
      return todo;
    },
    active(todo) {
      return !todo.completed;
    },
    completed(todo) {
      return todo.completed;
    },
  };

  static randomId = (array) => {
    let result = null;
    do {
      let random = Math.floor(Math.random() * 1000) + 1;
      let isSameId = array.some((item) => item.id === random);
      if (!isSameId) {
        result = random;
      }
    } while (!result);
    return result;
  };
}

export default GeneralMethod;

export const addTodo = (data) => {
  return {
    type: "todoList/add/Todo",
    payload: data,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    id: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};

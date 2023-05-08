import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;
export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  (todoList, status, searchText) => {
    return todoList.filter((todo) => {
      return (
        todo.name.includes(searchText) &&
        (status !== "All" && status !== "Completed"
          ? todo.completed
          : !todo.completed)
      );
    });
  }
);

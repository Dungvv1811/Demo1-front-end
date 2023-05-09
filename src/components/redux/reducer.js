import { combineReducers } from "redux";

import filtersReducer from "../Filters/filtersSlice";
import todoListReducer from "../TodoList/todosSlice";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;

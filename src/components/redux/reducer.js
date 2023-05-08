import { combineReducers } from "redux";

import filtersReducer from "../Filters/FiltersSlice";
import todoListReducer from "../Todo/TodosSlice";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;

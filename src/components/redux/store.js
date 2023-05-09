// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extention";

// const composeEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhancers);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../TodoList/todosSlice";
import filtersSlice from "../Filters/filtersSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default store;

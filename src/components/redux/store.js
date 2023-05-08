// import { createStoreHook } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extention";

const composeEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composeEnhancers);

export default store;

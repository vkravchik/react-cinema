import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../reducers/'
// import { logger } from "redux-logger";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;

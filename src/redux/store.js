import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {todoReducer} from "./todoReducer/todoReducer";
import thunk from "redux-thunk";

export const store = createStore(
    todoReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
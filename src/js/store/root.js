import { combineReducers } from "redux";

import books from "./books";
import authReducer from './auth'

const createRootReducer = combineReducers({
 books,
 authReducer
});

export default createRootReducer;

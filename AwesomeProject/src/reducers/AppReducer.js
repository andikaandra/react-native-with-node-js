import { combineReducers } from "redux";
import todos from "../reducers/TodosReducer";

const reducers = {
    todos: todos
}
const AppReducer = combineReducers(reducers);

export default AppReducer;
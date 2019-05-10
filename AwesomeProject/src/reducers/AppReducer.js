import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import todosReducers from "../reducers/TodosReducer";

const todoPersistConfig = {
    key: 'todos',
    storage: storage,
    blacklist: ['loading', 'error']
};

const reducers = {
    todos: persistReducer(todoPersistConfig, todosReducers)
}

const AppReducer = combineReducers(reducers);

export default AppReducer;
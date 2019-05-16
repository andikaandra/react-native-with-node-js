import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import todosReducers from "../reducers/TodosReducer";
import agendaReducers from '../reducers/AgendaReducers';

const todoPersistConfig = {
    key: 'todos',
    storage: storage,
    blacklist: ['loading', 'error']
};

const agendaPersistConfig = {
    key: 'agenda',
    storage: storage,
    blacklist: ['loading', 'error']
};
const reducers = {
    todos: persistReducer(todoPersistConfig, todosReducers),
    agenda: persistReducer(agendaPersistConfig, agendaReducers),
}

const AppReducer = combineReducers(reducers);

export default AppReducer;
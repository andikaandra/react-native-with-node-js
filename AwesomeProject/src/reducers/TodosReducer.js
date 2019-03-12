import { 
    FETCH_TODOS_BEGIN, 
    FETCH_TODOS_SUCCESS, 
    FETCH_TODOS_FAILURE, 
    UPDATE_STATUS_TODOS_BEGIN, 
    UPDATE_STATUS_TODOS_SUCCESS,
    UPDATE_STATUS_TODOS_FAILURE } from "../actions/todoActions";
  
const initialState = {
    items: [],
    loading: false,
    error: null
};
  
export default function TodosReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.todos
            };

        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        case UPDATE_STATUS_TODOS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case UPDATE_STATUS_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case UPDATE_STATUS_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };

        default:
            return state;
    }
}
  
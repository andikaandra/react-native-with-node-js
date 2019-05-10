import { 
    FETCH_TODOS_BEGIN, 
    FETCH_TODOS_SUCCESS, 
    ADD_TODO_TODOS_BEGIN,
    ADD_TODO_TODOS_SUCCESS,
    DELETE_TODOS_BEGIN,
    DELETE_TODOS_SUCCESS,
    UPDATE_STATUS_TODOS_BEGIN, 
    UPDATE_STATUS_TODOS_SUCCESS} from "../actions/todoActions";
  
const initialState = {
    iter    : 1,
    items   : [],
    loading : false,
    error   : null
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
            };

        case ADD_TODO_TODOS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case ADD_TODO_TODOS_SUCCESS:
            today = new Date()
            date = today.getFullYear()+'-'+ ("0" + (today.getMonth() + 1)).slice(-2) +'-'+ ("0" + today.getDate()).slice(-2)
            ampm = (today.getHours() < 12 || today.getHours() === 24) ? "AM" : "PM";
            time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ' ' + ampm
            dateTime = date+';'+time

            newTodo = {title:action.payload.value.title, body: action.payload.value.description, time:dateTime, important: action.payload.value.important}
            newTodo.id = state.iter
            newTodo.status = 0
            state.iter = state.iter + 1
            return {
                ...state,
                loading: false,
                items: [...state.items, newTodo],
            };

        case UPDATE_STATUS_TODOS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case UPDATE_STATUS_TODOS_SUCCESS:
            const newState = (state.items).map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.status = 1 - todo.status;
                }
                return todo;
            });
            return {
                ...state,
                loading: false,
                items: newState
            };

        case DELETE_TODOS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case DELETE_TODOS_SUCCESS:
            const updatedState = (state.items).filter((todo) => { 
                if (todo.id != action.payload.id){
                    return todo;
                }
            });
            return {
                ...state,
                loading: false,
                items: updatedState
            };


        default:
            return state;
    }
}
  
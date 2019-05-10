export function fetchTodos() {
    return dispatch => {
        dispatch(fetchTodosBegin());
        dispatch(fetchTodosSuccess());
    };
}
    
export const FETCH_TODOS_BEGIN = "FETCH_TODOS_BEGIN";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";

export const fetchTodosBegin = () => ({
    type: FETCH_TODOS_BEGIN
});
  
export const fetchTodosSuccess = () => ({
    type: FETCH_TODOS_SUCCESS,
});

// ===============================================================

export function addTodos(value) {
    return dispatch => {
        dispatch(addTodosBegin());
        dispatch(addTodosSuccess(value));
    };
}

export const ADD_TODO_TODOS_BEGIN = "ADD_TODO_TODOS_BEGIN";
export const ADD_TODO_TODOS_SUCCESS = "ADD_TODO_TODOS_SUCCESS";

export const addTodosBegin = () => ({
    type: ADD_TODO_TODOS_BEGIN
});

export const addTodosSuccess = (value) => ({
    type: ADD_TODO_TODOS_SUCCESS,
    payload: { value }
});

// ===============================================================

export function updateStatusTodos(id) {
    return dispatch => {
        dispatch(updateStatusTodosBegin());
        dispatch(updateStatusTodosSuccess(id));
    };
}

export const UPDATE_STATUS_TODOS_BEGIN = "UPDATE_STATUS_TODOS_BEGIN";
export const UPDATE_STATUS_TODOS_SUCCESS = "UPDATE_STATUS_TODOS_SUCCESS";

export const updateStatusTodosBegin = () => ({
    type: UPDATE_STATUS_TODOS_BEGIN
});

export const updateStatusTodosSuccess = (id) => ({
    type: UPDATE_STATUS_TODOS_SUCCESS,
    payload: { id }
});


// ===============================================================

export function deleteTodos(id) {
    return dispatch => {
        dispatch(deleteTodosBegin());
        dispatch(deleteTodosSuccess(id));
    };
}

export const DELETE_TODOS_BEGIN = "DELETE_TODOS_BEGIN";
export const DELETE_TODOS_SUCCESS = "DELETE_TODOS_SUCCESS";

export const deleteTodosBegin = () => ({
    type: DELETE_TODOS_BEGIN
});

export const deleteTodosSuccess = (id) => ({
    type: DELETE_TODOS_SUCCESS,
    payload: { id }
});

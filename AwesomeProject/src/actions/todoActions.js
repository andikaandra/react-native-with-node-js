function getTodos() {
    return fetch("http://10.0.2.2:3001/todos/")
        .then(handleErrors)
        .then(res => res.json());
}

export function fetchTodos() {
    return dispatch => {
        dispatch(fetchTodosBegin());
        return getTodos()
        .then(json => {
            dispatch(fetchTodosSuccess(json.todos));
            return json.todos;
        })
        .catch(error =>
            dispatch(fetchTodosFailure(error))
        );
    };
}

export const FETCH_TODOS_BEGIN = "FETCH_TODOS_BEGIN";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

export const fetchTodosBegin = () => ({
    type: FETCH_TODOS_BEGIN
});
  
export const fetchTodosSuccess = todos => ({
    type: FETCH_TODOS_SUCCESS,
    payload: { todos }
});
  
export const fetchTodosFailure = error => ({
    type: FETCH_TODOS_FAILURE,
    payload: { error }
});

function fetchupdateStatusTodos(id){
    return fetch('http://10.0.2.2:3001/todos/change-status/', {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({id: id})
    }).then(handleErrors)
    .then(res => res.json());
}

export function updateStatusTodos(id) {
    return dispatch => {
        dispatch(updateStatusTodosBegin());
        return fetchupdateStatusTodos(id)
        .then(json => {
            dispatch(updateStatusTodosSuccess());
            return json.todos;
        })
        .catch(error =>
            dispatch(updateStatusTodosFailure(error))
        );
    };
}


export const UPDATE_STATUS_TODOS_BEGIN = "UPDATE_STATUS_TODOS_BEGIN";
export const UPDATE_STATUS_TODOS_SUCCESS = "UPDATE_STATUS_TODOS_SUCCESS";
export const UPDATE_STATUS_TODOS_FAILURE = "UPDATE_STATUS_TODOS_FAILURE";

export const updateStatusTodosBegin = () => ({
    type: UPDATE_STATUS_TODOS_BEGIN
});

export const updateStatusTodosSuccess = () => ({
    type: UPDATE_STATUS_TODOS_SUCCESS
});
  
export const updateStatusTodosFailure = error => ({
    type: UPDATE_STATUS_TODOS_FAILURE,
    payload: { error }
});

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
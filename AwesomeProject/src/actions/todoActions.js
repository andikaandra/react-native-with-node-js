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
  
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
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
  
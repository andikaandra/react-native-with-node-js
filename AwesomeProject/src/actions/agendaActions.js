export function fetchAgendas() {
  return dispatch => {
      dispatch(fetchAgendasBegin());
      dispatch(fetchAgendasSuccess());
  };
}
  
export const FETCH_AGENDAS_BEGIN = "FETCH_AGENDAS_BEGIN";
export const FETCH_AGENDAS_SUCCESS = "FETCH_AGENDAS_SUCCESS";

export const fetchAgendasBegin = () => ({
  type: FETCH_AGENDAS_BEGIN
});

export const fetchAgendasSuccess = () => ({
  type: FETCH_AGENDAS_SUCCESS,
});

// ===============================================================

export function addAgendas(value) {
  return dispatch => {
      dispatch(addAgendasBegin());
      dispatch(addAgendasSuccess(value));
  };
}

export const ADD_AGENDAS_BEGIN = "ADD_AGENDAS_BEGIN";
export const ADD_AGENDAS_SUCCESS = "ADD_AGENDAS_SUCCESS";

export const addAgendasBegin = () => ({
  type: ADD_AGENDAS_BEGIN
});

export const addAgendasSuccess = (value) => ({
  type: ADD_AGENDAS_SUCCESS,
  payload: { value }
});

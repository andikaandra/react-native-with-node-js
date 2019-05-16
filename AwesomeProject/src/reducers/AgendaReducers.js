import { 
  FETCH_AGENDAS_BEGIN,
  FETCH_AGENDAS_SUCCESS,
  ADD_AGENDAS_BEGIN,
  ADD_AGENDAS_SUCCESS
} from "../actions/agendaActions";

const initialState = {
  iter    : 1,
  items   : [],
  loading : false,
  error   : null
};

export default function AgendaReducers(state = initialState, action) {
  switch (action.type) {
      case FETCH_AGENDAS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };

      case FETCH_AGENDAS_SUCCESS:
            return {
                ...state,
                loading: false,
            };

      case ADD_AGENDAS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

      case ADD_AGENDAS_SUCCESS:
            start = new Date(action.payload.value.date)
            dStart = start.getFullYear()+'-'+ (start.getMonth() + 1) +'-'+ start.getDate()

            end = new Date(action.payload.value.dateEnd)
            dEnd = end.getFullYear()+'-'+ (end.getMonth() + 1) +'-'+ end.getDate()

            timestart = new Date(action.payload.value.time)
            ampm = (timestart.getHours() < 12 || timestart.getHours() === 24) ? "AM" : "PM";
            tStart = ("0" + timestart.getHours()).slice(-2) + ":" + ("0" + timestart.getMinutes()).slice(-2) + ' ' + ampm

            timeend = new Date(action.payload.value.timeEnd)
            ampm = (timeend.getHours() < 12 || timeend.getHours() === 24) ? "AM" : "PM";
            tEnd = ("0" + timeend.getHours()).slice(-2) + ":" + ("0" + timeend.getMinutes()).slice(-2) + ' ' + ampm

            newAgenda = {
                event:action.payload.value.event, 
                description: action.payload.value.description, 
                date_start: dStart, 
                date_end: dEnd, 
                time_start: tStart, 
                time_end: tEnd, 
            }
            newAgenda.id = state.iter
            newAgenda.status = 0
            state.iter = state.iter + 1
            return {
                ...state,
                loading: false,
                items: [...state.items, newAgenda],
            };


        default:
            return state;
  }
}

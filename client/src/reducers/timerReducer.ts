import * as types from './../actionTypes/timer';

const initialState = {
  time: 5 * 60,
  loading: false,
  error: {},
};

const timerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.TIMER_TICK:
      return {
        ...state,
      };
    case types.TIMER_TICK_SUCCESS:
      return {
        ...state,
        time: state.time - 1,
        loading: false,
        error: {},
      };
    case types.TIMER_TICK_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.TIMER_TICK_LOADING:
      return {
        ...state,
        loading: true,
        error: {},
      };

    case types.TIMER_PAUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
      };
    case types.TIMER_PAUSE_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.TIMER_PAUSE_LOADING:
      return {
        ...state,
        loading: true,
        error: {},
      };
    default:
      return state;
  }
};

export default timerReducer;

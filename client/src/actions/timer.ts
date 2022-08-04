import * as types from './../actionTypes/timer';

export const tickTimer: any = () => (dispatch: any) => {
  dispatch(setTickTimerLoading());
  try {
    dispatch({ type: types.TIMER_TICK });
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.log(error);
    dispatch({ type: types.TIMER_PAUSE_FAILED, payload: error });
  } finally {
    dispatch({
      type: types.TIMER_TICK_SUCCESS,
    });
  }
};

export const pauseTimer: any = () => (dispatch: any) => {
  dispatch(setPauseTimerLoading());
  try {
    dispatch({ type: types.TIMER_PAUSE });
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.log(error);
    dispatch({ type: types.TIMER_PAUSE_FAILED, payload: error });
  } finally {
    dispatch({
      type: types.TIMER_PAUSE_SUCCESS,
    });
  }
};

export const setPauseTimerLoading = () => {
  return {
    type: types.TIMER_PAUSE_LOADING,
  };
};

export const setTickTimerLoading = () => {
  return {
    type: types.TIMER_TICK_LOADING,
  };
};

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/createSlice';
import { useInjectReducer } from 'utils/injectors';
import { TimerState } from './types';

export const initialState: TimerState = {
  time: 5 * 60,
  loading: false,
  error: null,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    tick(state, action: PayloadAction) {
      state.time = state.time - 1;
    },
  },
});

export const { actions: TimerActions } = timerSlice;
export default timerSlice.reducer;

export const UseTimerSlice = () => {
  useInjectReducer({
    key: timerSlice.name,
    reducer: timerSlice.reducer,
  });
  return { actions: timerSlice.actions };
};

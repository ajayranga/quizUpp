import { PayloadAction } from '@reduxjs/toolkit';
import { SubmitQuizState } from './types';
import { SubmitQuizSaga } from './saga';
import { createSlice } from 'utils/createSlice';
import { useInjectReducer, useInjectSaga } from 'utils/injectors';

export const initialState: SubmitQuizState = {
  loading: false,
  error: null,
  success: false,
};

const submitQuizSlice = createSlice({
  name: 'submitQuiz',
  initialState,
  reducers: {
    start(state, action: PayloadAction) {
      state.loading = true;
    },
    done(state, action: PayloadAction) {
      state.error = null;
      state.loading = false;
      state.success = true;
    },
    success(state, action: PayloadAction) {
      state.error = null;
      state.loading = false;
      state.success = true;
    },
    failed(state, action: PayloadAction<Error>) {
      state.error = action.payload;
      state.loading = false;
    },
    reset(state, action: PayloadAction) {
      state.error = null;
      state.loading = false;
      state.success = false;
    },
  },
});

export const { actions: submitQuizActions } = submitQuizSlice;
export default submitQuizSlice.reducer;

export const UseSubmitQuizSlice = () => {
  useInjectReducer({
    key: submitQuizSlice.name,
    reducer: submitQuizSlice.reducer,
  });
  useInjectSaga({
    key: submitQuizSlice.name,
    saga: SubmitQuizSaga,
  });

  return { actions: submitQuizSlice.actions };
};

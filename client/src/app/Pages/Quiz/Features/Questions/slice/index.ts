import { PayloadAction } from '@reduxjs/toolkit';
import { AllQuestionsState, QuestionState } from './types';
import { AllQuestionsSaga } from './saga';
import { createSlice } from 'utils/createSlice';
import { useInjectReducer, useInjectSaga } from 'utils/injectors';

export const initialState: AllQuestionsState = {
  allQuestions: [],
  loading: false,
  error: null,
  success: false,
};

const allQuestionsSlice = createSlice({
  name: 'allQuestions',
  initialState,
  reducers: {
    fetchStart(state, action: PayloadAction) {
      state.loading = true;
    },
    fetch(state, action: PayloadAction<QuestionState[]>) {
      state.allQuestions = action.payload;
      state.error = null;
      state.loading = false;
      state.success = true;
    },
    fetchSuccess(state, action: PayloadAction) {
      state.error = null;
      state.loading = false;
      state.success = true;
    },
    fetchFailed(state, action: PayloadAction<Error>) {
      state.allQuestions = [];
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: AllQuestionsActions } = allQuestionsSlice;
export default allQuestionsSlice.reducer;

export const UseAllQuestionsSlice = () => {
  useInjectReducer({
    key: allQuestionsSlice.name,
    reducer: allQuestionsSlice.reducer,
  });
  useInjectSaga({
    key: allQuestionsSlice.name,
    saga: AllQuestionsSaga,
  });
  return { actions: allQuestionsSlice.actions };
};

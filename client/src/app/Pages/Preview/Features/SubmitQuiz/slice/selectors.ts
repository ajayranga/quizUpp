import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.submitQuiz || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  (submitQuiz) => submitQuiz.loading
);

export const selectError = createSelector(
  [selectDomain],
  (submitQuiz) => submitQuiz.error
);

export const selectSuccess = createSelector(
  [selectDomain],
  (submitQuiz) => submitQuiz.success
);

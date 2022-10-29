import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.allQuestions || initialState;

export const selectAllQuestions = createSelector(
  [selectDomain],
  (allQuestions) => allQuestions.allQuestions
);

export const selectLoading = createSelector(
  [selectDomain],
  (allQuestions) => allQuestions.loading
);

export const selectError = createSelector(
  [selectDomain],
  (allQuestions) => allQuestions.error
);

export const selectSuccess = createSelector(
  [selectDomain],
  (allQuestions) => allQuestions.success
);

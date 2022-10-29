import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.allResponses || initialState;

export const selectAllResponses = createSelector(
  [selectDomain],
  (allResponses) => allResponses.responses
);

export const selectLoading = createSelector(
  [selectDomain],
  (allResponses) => allResponses.loading
);

export const selectError = createSelector(
  [selectDomain],
  (allResponses) => allResponses.error
);

export const selectSuccess = createSelector(
  [selectDomain],
  (allResponses) => allResponses.success
);

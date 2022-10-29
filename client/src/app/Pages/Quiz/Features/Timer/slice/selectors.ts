import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.timer || initialState;

export const selectTime = createSelector([selectDomain], (timer) => timer.time);

export const selectLoading = createSelector(
  [selectDomain],
  (timer) => timer.loading
);

export const selectError = createSelector(
  [selectDomain],
  (timer) => timer.error
);

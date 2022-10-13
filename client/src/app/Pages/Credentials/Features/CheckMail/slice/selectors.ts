import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.checkMail || initialState;

export const selectIsExist = createSelector(
  [selectDomain],
  (checkMail) => checkMail.isExist
);

export const selectLoading = createSelector(
  [selectDomain],
  (checkMail) => checkMail.loading
);

export const selectError = createSelector(
  [selectDomain],
  (checkMail) => checkMail.error
);

export const selectSuccess = createSelector(
  [selectDomain],
  (checkMail) => checkMail.success
);

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.credentials || initialState;

export const selectUserInfo = createSelector(
  [selectDomain],
  (credentials) => credentials.userInfo
);

export const selectLoading = createSelector(
  [selectDomain],
  (credentials) => credentials.loading
);

export const selectError = createSelector(
  [selectDomain],
  (credentials) => credentials.error
);

export const selectSuccess = createSelector(
  [selectDomain],
  (credentials) => credentials.success
);

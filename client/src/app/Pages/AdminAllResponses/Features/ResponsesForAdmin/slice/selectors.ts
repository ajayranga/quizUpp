import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) =>
  state.responseForAdmin || initialState;

export const selectAllResponses = createSelector(
  [selectDomain],
  (responseForAdmin) => responseForAdmin.allResponses
);
export const selectUserResponses = createSelector(
  [selectDomain],
  (responseForAdmin) => responseForAdmin.userResponses
);
export const selectPages = createSelector(
  [selectDomain],
  (responseForAdmin) => responseForAdmin.pages
);
export const selectPageSize = createSelector(
  [selectDomain],
  (responseForAdmin) => responseForAdmin.pageSize
);
export const selectPageNumber = createSelector(
  [selectDomain],
  (responseForAdmin) => responseForAdmin.pageNumber
);
export const selectTotalRecords = createSelector(
  [selectDomain],
  (responseForAdmin) => responseForAdmin.totalRecords
);
export const selectLoading = createSelector(
  [selectDomain],
  (responseForAdmin) => responseForAdmin.loading
);

export const selectError = createSelector(
  [selectDomain],
  (responseForAdmin) => responseForAdmin.error
);

export const selectSuccess = createSelector(
  [selectDomain],
  (responseForAdmin) => responseForAdmin.success
);

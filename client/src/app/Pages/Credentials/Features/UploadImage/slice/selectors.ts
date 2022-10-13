import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.uploadImage || initialState;

export const selectImageUrl = createSelector(
  [selectDomain],
  (uploadImage) => uploadImage.imageUrl
);

export const selectLoading = createSelector(
  [selectDomain],
  (uploadImage) => uploadImage.loading
);

export const selectError = createSelector(
  [selectDomain],
  (uploadImage) => uploadImage.error
);

export const selectSuccess = createSelector(
  [selectDomain],
  (uploadImage) => uploadImage.success
);

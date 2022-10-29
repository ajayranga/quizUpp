import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/createSlice';
import { useInjectReducer, useInjectSaga } from 'utils/injectors';
import { UploadImageSaga } from './saga';
import { UploadImageState } from './types';

export const initialState: UploadImageState = {
  imageUrl: '',
  loading: false,
  error: null,
  success: false,
};

const uploadImageSlice = createSlice({
  name: 'uploadImage',
  initialState,
  reducers: {
    start(state, action: PayloadAction<File>) {
      state.loading = true;
    },
    upload(state, action: PayloadAction<string>) {
      state.imageUrl = action.payload;
      state.error = null;
      state.loading = false;
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
      state.imageUrl = '';
      state.error = null;
      state.loading = false;
      state.success = false;
    },
  },
});

export const { actions: uploadImageActions } = uploadImageSlice;
export default uploadImageSlice.reducer;

export const UseUploadImageSlice = () => {
  useInjectReducer({
    key: uploadImageSlice.name,
    reducer: uploadImageSlice.reducer,
  });
  useInjectSaga({
    key: uploadImageSlice.name,
    saga: UploadImageSaga,
  });
  return { actions: uploadImageSlice.actions };
};

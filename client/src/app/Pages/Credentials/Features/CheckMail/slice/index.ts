import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/createSlice';
import { useInjectReducer, useInjectSaga } from 'utils/injectors';
import { checkMailSaga } from './saga';
import { CheckMailState } from './types';

export const initialState: CheckMailState = {
  isExist: false,
  loading: false,
  error: null,
  success: false,
};

const checkMailSlice = createSlice({
  name: 'checkMail',
  initialState,
  reducers: {
    checkMailStart(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    check(state, action: PayloadAction<boolean>) {
      state.isExist = action.payload;
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
    deleteStart(state, action: PayloadAction) {
      state.loading = true;
    },
    resetStart(state, action: PayloadAction) {},
    reset(state, action: PayloadAction) {
      state.isExist = false;
      state.error = null;
      state.loading = false;
      state.success = false;
    },
  },
});

export const { actions: checkMailActions } = checkMailSlice;
export default checkMailSlice.reducer;

export const UseCheckMailSlice = () => {
  useInjectReducer({
    key: checkMailSlice.name,
    reducer: checkMailSlice.reducer,
  });
  useInjectSaga({
    key: checkMailSlice.name,
    saga: checkMailSaga,
  });
  return { actions: checkMailSlice.actions };
};

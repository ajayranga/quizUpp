import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/createSlice';
import { useInjectReducer } from 'utils/injectors';
import { CredentailsState, UserInfo } from './types';

export const initialState: CredentailsState = {
  userInfo: {},
  loading: false,
  error: null,
  success: false,
};

const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    save(state, action: PayloadAction<UserInfo>) {
      state.userInfo = action.payload;
      state.error = null;
      state.loading = false;
      state.success = true;
    },
    reset(state, action: PayloadAction) {
      state.userInfo = {};
      state.error = null;
      state.loading = false;
    },
  },
});

export const { actions: credentialsActions } = credentialsSlice;
export default credentialsSlice.reducer;

export const UseCredentialsSlice = () => {
  const res = useInjectReducer({
    key: credentialsSlice.name,
    reducer: credentialsSlice.reducer,
  });
  return { actions: credentialsSlice.actions, isInjected: res };
};

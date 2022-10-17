import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/createSlice';
import { useInjectReducer, useInjectSaga } from 'utils/injectors';
import { ResponsesForAdminSaga } from './saga';
import {
  FetchAllResponseType,
  FetchUserResponseType,
  ResponseForAdminState,
} from './types';

export const initialState: ResponseForAdminState = {
  allResponses: [],
  userResponses: {
    userResponses: {},
    questions: [],
  },
  pages: 1,
  pageSize: 10,
  pageNumber: 1,
  totalRecords: 0,
  loading: false,
  error: null,
  success: false,
};
export interface payloadArgs {
  pageNumber: number;
  pageSize?: number;
  sortField?: string;
  dir?: 'asc' | 'desc';
}
const ResponseForAdminSlice = createSlice({
  name: 'responseForAdmin',
  initialState,
  reducers: {
    fetchAllStart(state, action: PayloadAction<payloadArgs>) {
      state.loading = true;
    },
    fetchAll(state, action: PayloadAction<FetchAllResponseType>) {
      state.allResponses = action.payload.allResponses;
      state.pages = action.payload.pages;
      state.pageSize = action.payload.pageSize;
      state.pageNumber = action.payload.pageNumber;
      state.totalRecords = action.payload.totalRecords;
      state.error = null;
      state.loading = false;
    },
    fetchAllSuccess(state, action: PayloadAction) {
      state.error = null;
      state.loading = false;
      state.success = true;
    },
    fetchAllFailed(state, action: PayloadAction<Error>) {
      state.error = action.payload;
      state.loading = false;
    },
    fetchUserStart(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    fetchUser(state, action: PayloadAction<FetchUserResponseType>) {
      state.userResponses = {
        userResponses: action.payload.userResponses,
        questions: action.payload.questions,
      };
      state.error = null;
      state.loading = false;
    },
    fetchUserSuccess(state, action: PayloadAction) {
      state.error = null;
      state.loading = false;
      state.success = true;
    },
    fetchUserFailed(state, action: PayloadAction<Error>) {
      state.error = action.payload;
      state.loading = false;
    },
    reset(state, action: PayloadAction) {
      state.allResponses = [];
      state.userResponses = {
        userResponses: {},
        questions: [],
      };
      state.pages = 1;
      state.pageSize = 10;
      state.pageNumber = 1;
      state.error = null;
      state.loading = false;
      state.success = false;
    },
  },
});

export const { actions: responseForAdminActions } = ResponseForAdminSlice;
export default ResponseForAdminSlice.reducer;

export const UseResponseForAdminSlice = () => {
  useInjectReducer({
    key: ResponseForAdminSlice.name,
    reducer: ResponseForAdminSlice.reducer,
  });
  useInjectSaga({
    key: ResponseForAdminSlice.name,
    saga: ResponsesForAdminSaga,
  });
  return { actions: ResponseForAdminSlice.actions };
};

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/createSlice';
import { useInjectReducer } from 'utils/injectors';
import { AllResponsesState, ResponseState } from './types';

export const initialState: AllResponsesState = {
  responses: [],
  loading: false,
  error: null,
  success: false,
};

// interface argIntf extends ResponseState {
//   allResponses: ResponseState[];
// }
const allResponsesSlice = createSlice({
  name: 'allResponses',
  initialState,
  reducers: {
    submit(state, action: PayloadAction<ResponseState>) {
      const qIdAr = state.responses.map((itm) => itm.qId);
      if (
        state.responses.length === 0 ||
        qIdAr.indexOf(action.payload.qId) === -1
      )
        state.responses.push(action.payload);
      else
        state.responses.forEach(
          (resp: ResponseState, index: number) =>
            resp.qId === action.payload.qId &&
            (state.responses[index] = action.payload)
        );

      state.error = null;
      state.loading = false;
      state.success = true;
    },
    reset(state, action: PayloadAction) {
      state.responses = [];
      state.error = null;
      state.loading = false;
      state.success = false;
    },
  },
});

export const { actions: AllQuestionsActions } = allResponsesSlice;
export default allResponsesSlice.reducer;

export const UseAllResponsesSlice = () => {
  useInjectReducer({
    key: allResponsesSlice.name,
    reducer: allResponsesSlice.reducer,
  });
  return { actions: allResponsesSlice.actions };
};

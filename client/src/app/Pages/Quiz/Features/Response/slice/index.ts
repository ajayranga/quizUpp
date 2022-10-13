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

interface argIntf extends ResponseState {
  allResponses: ResponseState[];
}
const allResponsesSlice = createSlice({
  name: 'allResponses',
  initialState,
  reducers: {
    submit(state, action: PayloadAction<argIntf>) {
      const responsesFromState = action.payload.allResponses;
      var result = [];
      const data = { qId: action.payload.qId, answer: action.payload.answer };
      responsesFromState.length !== 0
        ? responsesFromState.forEach((itm: ResponseState) => {
            if (itm.qId === data.qId) result.push(data);
            else {
              result.push(itm, data);
            }
          })
        : result.push(data);
      result = result.filter(
        (itm: ResponseState, index: number, arr: ResponseState[]) =>
          arr.findIndex((itm2: any) => itm2.qId === itm.qId) === index
      );
      state.responses = result;
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

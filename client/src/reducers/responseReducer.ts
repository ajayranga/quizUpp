import * as types from './../actionTypes/responses';

const initialState = {
  allResponses: [],
  loading: false,
  error: {},
  success: false,
};

const responseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.RESPONSE_SUBMIT:
      return {
        ...state,
        allResponses: action.payload,
        loading: false,
      };
    case types.RESPONSE_SUBMIT_SUCCESS:
      return { ...state, loading: false, success: true };
    case types.RESPONSE_SUBMIT_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.RESPONSE_SUBMIT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.RESPONSE_DELETE:
      return {
        ...state,
        allResponses: [],
        loading: false,
      };
    case types.RESPONSE_DELETE_SUCCESS:
      return { ...state, loading: false };
    case types.RESPONSE_DELETE_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.RESPONSE_DELETE_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default responseReducer;

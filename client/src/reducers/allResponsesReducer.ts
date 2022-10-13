import * as types from './../actionTypes/allResponses';

const initialState = {
  allResponses: [],
  userResponses: {},
  pages: 1,
  pageSize: 10,
  pageNumber: 1,
  loading: false,
  error: {},
  success: false,
};

const allResponsesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.ALL_RESPONSES:
      return {
        ...state,
        allResponses: action.payload.allResponses,
        pages: action.payload.pages,
        pageSize: action.payload.pageSize,
        pageNumber: action.payload.pageNumber,
        loading: false,
      };
    case types.ALL_RESPONSES_SUCCESS:
      return { ...state, loading: false, success: true };
    case types.ALL_RESPONSES_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.ALL_RESPONSES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.USER_RESPONSES:
      return {
        ...state,
        userResponses: {
          userResponses: action.payload.userResponses,
          questions: action.payload.questions,
        },
        loading: false,
      };
    case types.USER_RESPONSES_SUCCESS:
      return { ...state, loading: false, success: true };
    case types.USER_RESPONSES_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.USER_RESPONSES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default allResponsesReducer;

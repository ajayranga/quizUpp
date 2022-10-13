import * as types from './../actionTypes/submitQuiz';

const initialState = {
  loading: false,
  error: {},
  success: false,
};

const submitQuizReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.QUIZ_SUBMIT:
      return {
        ...state,
      };
    case types.QUIZ_SUBMIT_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: {},
      };
    case types.QUIZ_SUBMIT_CLEAR:
      return {
        success: false,
        loading: false,
        error: {},
      };
    case types.QUIZ_SUBMIT_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.QUIZ_SUBMIT_LOADING:
      return {
        ...state,
        loading: true,
        error: {},
      };
    default:
      return state;
  }
};

export default submitQuizReducer;

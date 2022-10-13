import * as types from './../actionTypes/question';

const initialState = {
  allQuestions: [],
  loading: false,
  error: {},
};

const questionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.QUESTIONS_LOADING_SUCCESS:
      return {
        ...state,
        allQuestions: action.payload,
        loading: false,
        error: {},
      };
    case types.QUESTIONS_LOADING_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.QUESTIONS_LOADING:
      return {
        ...state,
        loading: true,
        error: {},
      };
    default:
      return state;
  }
};

export default questionReducer;

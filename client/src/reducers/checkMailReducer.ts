import * as types from './../actionTypes/checkMail';

const initialState = {
  isExist: false,
  loading: false,
  error: {},
  success: false,
};

const checkMailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CHECK_MAIL:
      return {
        ...state,
        isExist: action.payload,
        error: {},
        loading: false,
      };
    case types.CHECK_MAIL_SUCCESS:
      return {
        ...state,
        error: {},
        loading: false,
        success: true,
      };
    case types.CHECK_MAIL_FAILED:
      return {
        ...state,
        isExist: {},
        error: action.payload,
        loading: false,
      };
    case types.CHECK_MAIL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.CHECK_MAIL_CLEAR:
      return {
        isExist: false,
        loading: false,
        error: {},
        success: false,
      };
    default:
      return state;
  }
};

export default checkMailReducer;

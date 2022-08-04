import * as types from './../actionTypes/credentials';

const initialState = {
  userInfo: {},
  loading: false,
  error: {},
  success: false,
};

const credentialsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREDENTIALS_SAVE:
      return {
        ...state,
        userInfo: action.payload,
        error: {},
        loading: false,
      };
    case types.CREDENTIALS_SAVE_SUCCESS:
      return {
        ...state,
        error: {},
        loading: false,
        success: true,
      };
    case types.CREDENTIALS_SAVE_FAILED:
      return {
        ...state,
        userInfo: {},
        error: action.payload,
        loading: false,
      };
    case types.CREDENTIALS_SAVE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.CREDENTIALS_DELETE:
      return {
        ...state,
        userInfo: {},
        error: {},
        loading: false,
      };
    case types.CREDENTIALS_DELETE_SUCCESS:
      return {
        ...state,
        userInfo: {},
        error: {},
        loading: false,
      };
    case types.CREDENTIALS_DELETE_FAILED:
      return {
        ...state,
        userInfo: {},
        error: action.payload,
        loading: false,
      };
    case types.CREDENTIALS_DELETE_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default credentialsReducer;

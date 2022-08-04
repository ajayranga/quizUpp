import * as types from './../actionTypes/uploadImage';

const initialState = {
  imageUrl: '',
  loading: false,
  error: {},
  success: false,
};

const uploadImageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.UPLOAD_IMAGE:
      return {
        ...state,
        imageUrl: action.payload,
        loading: false,
      };
    case types.UPLOAD_IMAGE_SUCCESS:
      return { ...state, loading: false, success: true };
    case types.UPLOAD_IMAGE_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.UPLOAD_IMAGE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.UPLOAD_IMAGE_CLEAR:
      return {
        imageUrl: '',
        loading: false,
        error: {},
        success: false,
      };
    default:
      return state;
  }
};

export default uploadImageReducer;

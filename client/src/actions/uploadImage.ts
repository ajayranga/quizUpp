import * as types from './../actionTypes/uploadImage';
import axios from 'axios';

export const uploadImage: any =
  (file: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch(setUploadImageLoading());
      const formData = new FormData();
      formData.append('image', file);

      const config = {
        headers: { 'Content-type': 'multipart/form-data' },
      };
      const { data } = await axios.post('/api/upload', formData, config);

      dispatch({
        type: types.UPLOAD_IMAGE,
        payload: data,
      });
    } catch (error: any) {
      process.env.NODE_ENV === 'development' && console.log(error);
      dispatch({
        type: types.UPLOAD_IMAGE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    } finally {
      dispatch({
        type: types.UPLOAD_IMAGE_SUCCESS,
      });
    }
  };

export const setUploadImageLoading = () => {
  return {
    type: types.UPLOAD_IMAGE_LOADING,
  };
};

export const uploadImageClear = () => {
  return {
    type: types.UPLOAD_IMAGE_CLEAR,
  };
};

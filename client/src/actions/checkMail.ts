import * as types from './../actionTypes/checkMail';
import Axios from 'axios';

export const checkMail: any = (email: any) => async (dispatch: any) => {
  dispatch(setCheckMailLoading());
  try {
    const { data } = await Axios.post('/api/response/checkEmail', {
      email,
    });
    dispatch({ type: types.CHECK_MAIL, payload: data.exist });
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.log(error);
    dispatch({ type: types.CHECK_MAIL_FAILED, payload: error });
  } finally {
    dispatch({
      type: types.CHECK_MAIL_SUCCESS,
    });
  }
};

export const setCheckMailLoading = () => {
  return {
    type: types.CHECK_MAIL_LOADING,
  };
};

export const setCheckMailClear = () => {
  return {
    type: types.CHECK_MAIL_CLEAR,
  };
};

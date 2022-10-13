import axios from 'axios';
import * as types from './../actionTypes/question';

export const getAllQuestions: any = () => async (dispatch: any) => {
  dispatch(setQuestionLoading());
  try {
    const { data } = await axios.get('/api/question/');

    dispatch({
      type: types.QUESTIONS_LOADING_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: types.QUESTIONS_LOADING_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const setQuestionLoading = () => {
  return {
    type: types.QUESTIONS_LOADING,
  };
};

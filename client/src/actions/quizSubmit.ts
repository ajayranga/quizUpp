import Axios from 'axios';
import * as types from './../actionTypes/submitQuiz';

export const submitQuiz: any =
  (data: any) => async (dispatch: any, getState: any) => {
    dispatch(setSubmitQuizLoading());
    try {
      var score: number = 0;
      const {
        response: { allResponses },
        question: { allQuestions },
        credentials: { userInfo },
      } = getState();

      allResponses.forEach((itm: any) => {
        allQuestions.forEach((itm2: any) => {
          if (itm.qId === itm2._id && itm.answer === itm2.answer) score++;
        });
      });
      const { data } = await Axios.post('/api/response', {
        name: userInfo.name,
        dob: userInfo.dob,
        fatherName: userInfo.fatherName,
        address: userInfo.address,
        docType: userInfo.docType,
        docNum: userInfo.docNum,
        email: userInfo.email,
        image: userInfo.image,
        score,
        responses: allResponses,
      });
      return dispatch({
        type: types.QUIZ_SUBMIT_SUCCESS,
        payload: {},
      });
    } catch (error: any) {
      process.env.NODE_ENV === 'development' &&
        console.log(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
      return dispatch({
        type: types.QUIZ_SUBMIT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const setSubmitQuizLoading = () => {
  return {
    type: types.QUIZ_SUBMIT_LOADING,
  };
};

export const submitQuizClear = () => {
  return {
    type: types.QUIZ_SUBMIT_CLEAR,
  };
};

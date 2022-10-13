import * as types from './../actionTypes/responses';

export const submitResponse: any =
  (data: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch(setSubmitResponseLoading());
      var result: any = [];
      const {
        response: { allResponses },
      } = getState();
      allResponses.length !== 0
        ? allResponses.forEach((itm: any) => {
            if (itm.qId === data.qId)
              result.push({ qId: data.qId, answer: data.answer });
            else {
              result.push(itm, data);
            }
          })
        : result.push(data);

      result = result.filter(
        (itm: any, index: number, arr: [any]) =>
          arr.findIndex((itm2: any) => itm2.qId === itm.qId) === index
      );
      dispatch({
        type: types.RESPONSE_SUBMIT,
        payload: result,
      });
    } catch (error) {
      process.env.NODE_ENV === 'development' && console.log(error);
      dispatch({
        type: types.RESPONSE_SUBMIT_FAILED,
        payload: error,
      });
    }
  };

export const setSubmitResponseLoading = () => {
  return {
    type: types.RESPONSE_SUBMIT_LOADING,
  };
};

export const deleteResponses: any = (credentials: any) => (dispatch: any) => {
  dispatch(setDeleteResponseLoading());
  try {
    dispatch({ type: types.RESPONSE_DELETE });
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.log(error);
    dispatch({ type: types.RESPONSE_DELETE_FAILED, payload: error });
  } finally {
    dispatch({
      type: types.RESPONSE_DELETE_SUCCESS,
    });
  }
};
export const setDeleteResponseLoading = () => {
  return {
    type: types.RESPONSE_SUBMIT_LOADING,
  };
};

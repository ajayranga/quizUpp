import * as types from './../actionTypes/allResponses';
import Axios from 'axios';

export const getAllResponses: any =
  (pageNumber = '') =>
  async (dispatch: any) => {
    dispatch(setAllResponsesLoading());
    try {
      const { data } = await Axios.get(
        `/api/admin/allResponses?pageNumber=${pageNumber}`
      );

      dispatch({ type: types.ALL_RESPONSES, payload: data });
    } catch (error) {
      process.env.NODE_ENV === 'development' && console.log(error);
      dispatch({ type: types.ALL_RESPONSES_FAILED, payload: error });
    } finally {
      dispatch({
        type: types.ALL_RESPONSES_SUCCESS,
      });
    }
  };

export const setAllResponsesLoading = () => {
  return {
    type: types.ALL_RESPONSES_LOADING,
  };
};

export const getUserResponses: any =
  (userId: string) => async (dispatch: any) => {
    dispatch(setUserResponsesLoading());
    try {
      const { data } = await Axios.get(`/api/admin/responses/${userId}`);

      dispatch({ type: types.USER_RESPONSES, payload: data });
    } catch (error) {
      process.env.NODE_ENV === 'development' && console.log(error);
      dispatch({ type: types.USER_RESPONSES_FAILED, payload: error });
    } finally {
      dispatch({
        type: types.USER_RESPONSES_SUCCESS,
      });
    }
  };

export const setUserResponsesLoading = () => {
  return {
    type: types.USER_RESPONSES_LOADING,
  };
};

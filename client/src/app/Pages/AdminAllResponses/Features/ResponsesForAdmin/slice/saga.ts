import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { responseForAdminActions as actions } from '.';
import { FetchAllResponseType, FetchUserResponseType } from './types';

const fetchAllResponses = function* (action: PayloadAction<string>) {
  yield delay(10);
  try {
    const pageNumber = action.payload ? action.payload : '';
    const requestURL = `/api/admin/allResponses?pageNumber=${pageNumber}`;
    const result: FetchAllResponseType = yield call(request, requestURL, {
      method: 'get',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });
    yield put(actions.fetchAll(result));
    yield put(actions.fetchAllSuccess());
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.log(error);
    if (error instanceof Error) yield put(actions.fetchAllFailed(error));
  }
};

const fetchUserResponses = function* (action: PayloadAction<string>) {
  yield delay(10);
  try {
    const userId: string = action.payload ? action.payload : '';
    const requestURL = `/api/admin/responses/${userId}`;
    const data: FetchUserResponseType = yield call(request, requestURL, {
      method: 'get',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });
    yield put(actions.fetchUser(data));
    yield put(actions.fetchUserSuccess());
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.log(error);
    if (error instanceof Error) yield put(actions.fetchUserFailed(error));
  }
};

export const ResponsesForAdminSaga = function* () {
  yield takeLatest(actions.fetchAllStart.type, fetchAllResponses);
  yield takeLatest(actions.fetchUserStart.type, fetchUserResponses);
};

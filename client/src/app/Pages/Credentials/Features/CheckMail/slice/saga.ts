import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { checkMailActions as actions } from '.';

const checkMail = function* (action: PayloadAction<string>) {
  yield delay(10);
  try {
    const requestURL = '/api/response/checkEmail';
    const { exist } = yield call(request, requestURL, {
      method: 'post',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({ email: action.payload }),
    });
    yield put(actions.check(exist));
    yield put(actions.success());
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.log(error);
    if (error instanceof Error) yield put(actions.failed(error));
  }
};

const reset = function* (action: PayloadAction) {
  yield put(actions.reset());
};

export const checkMailSaga = function* () {
  yield takeLatest(actions.checkMailStart.type, checkMail);
  yield takeLatest(actions.resetStart.type, reset);
};

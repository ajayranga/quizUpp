import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { AllQuestionsActions as actions } from '.';
import { QuestionState } from './types';

const startFetching = function* (action: PayloadAction<QuestionState>) {
  yield delay(10);
  try {
    const requestURL = '/api/question';
    const { questions } = yield call(request, requestURL, {
      method: 'get',
      mode: 'cors',
    });
    yield put(actions.fetch(questions));
    yield put(actions.fetchSuccess());
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.log(error);
    if (error instanceof Error) yield put(actions.fetchFailed(error));
  }
};

export const AllQuestionsSaga = function* () {
  yield takeLatest(actions.fetchStart.type, startFetching);
};

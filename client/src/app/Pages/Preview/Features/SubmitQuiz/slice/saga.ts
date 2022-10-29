import { PayloadAction } from '@reduxjs/toolkit';
import { selectUserInfo } from 'app/Pages/Credentials/Features/Credentials/slice/selectors';
import { UserInfo } from 'app/Pages/Credentials/Features/Credentials/slice/types';
import { selectAllQuestions } from 'app/Pages/Quiz/Features/Questions/slice/selectors';
import { QuestionState } from 'app/Pages/Quiz/Features/Questions/slice/types';
import { ResponseState } from 'app/Pages/Quiz/Features/Response/slice/types';
import { selectAllResponses } from 'app/Pages/Quiz/Features/Response/slice/selectors';
import { call, put, takeLatest, delay, select } from 'redux-saga/effects';
import { request } from 'utils/request';
import { submitQuizActions as actions } from '.';
import { responseType } from './types';

const startSubmiting = function* (action: PayloadAction<responseType>) {
  yield delay(10);
  try {
    var score: number = 0;
    const userInfo: UserInfo = yield select(selectUserInfo);
    const allResponses: ResponseState[] = yield select(selectAllResponses);
    const allQuestions: QuestionState[] = yield select(selectAllQuestions);

    allResponses.forEach((itm) => {
      allQuestions.forEach((itm2) => {
        if (itm.qId === itm2._id && itm.answer === itm2.answer) score++;
      });
    });
    const responseToSubmit: responseType = {
      name: userInfo.name!,
      dob: userInfo.dob!,
      fatherName: userInfo.fatherName!,
      address: userInfo.address!,
      docType: userInfo.docType!,
      docNum: userInfo.docNum!,
      email: userInfo.email!,
      image: userInfo.image!,
      score,
      responses: allResponses,
    };
    const requestURL = '/api/response';
    yield call(request, requestURL, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(responseToSubmit),
    });
    yield put(actions.done());
    yield put(actions.success());
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.log(error);
    if (error instanceof Error) yield put(actions.failed(error));
  }
};

export const SubmitQuizSaga = function* () {
  yield takeLatest(actions.start.type, startSubmiting);
};

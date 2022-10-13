import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { uploadImageActions as actions } from '.';

const startUpload = function* (action: PayloadAction<File>) {
  yield delay(10);
  try {
    const formData = new FormData();
    formData.append('image', action.payload);

    const requestURL = '/api/upload';
    const { imageUrl } = yield call(request, requestURL, {
      method: 'post',
      mode: 'cors',
      body: formData,
    });
    yield put(actions.upload(imageUrl));
    yield put(actions.success());
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.log(error);
    if (error instanceof Error) yield put(actions.failed(error));
  }
};

const reset = function* (action: PayloadAction) {
  yield put(actions.reset());
};

export const UploadImageSaga = function* () {
  yield takeLatest(actions.start.type, startUpload);
  yield takeLatest(actions.resetStart.type, reset);
};

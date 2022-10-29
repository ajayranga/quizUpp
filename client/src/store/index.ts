import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';

import { createReducer } from './reducers';

const initialState = {};
const sagaMiddleware = createSagaMiddleware({});
const { run: runSaga } = sagaMiddleware;
const middleware = [sagaMiddleware];

const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
] as StoreEnhancer[];

const store = configureStore({
  reducer: createReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    ...middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: initialState,
  enhancers,
});

export default store;

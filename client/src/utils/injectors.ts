import { AnyAction, Reducer } from '@reduxjs/toolkit';
import {
  SagaInjectionModes,
  useInjectReducer as useReducerOriginal,
  useInjectSaga as useSagaOriginal,
} from 'redux-injectors';
import { Saga } from 'redux-saga';
import { RootState } from 'types';

type RootStateKeys = keyof RootState;
type RequiredRootState = Required<RootState>;

interface InjectReducerParams<Key extends RootStateKeys> {
  key: Key;
  reducer: Reducer<RequiredRootState[Key], AnyAction>;
}

export interface InjectSagaParams {
  key: RootStateKeys | string;
  saga: Saga;
  mode?: SagaInjectionModes;
}

export function useInjectReducer<Key extends RootStateKeys>(
  params: InjectReducerParams<Key>
) {
  return useReducerOriginal(params);
}

export function useInjectSaga(params: InjectSagaParams) {
  return useSagaOriginal(params);
}

import {
  createSlice as createSliceOriginal,
  SliceCaseReducers,
  CreateSliceOptions,
} from '@reduxjs/toolkit';
import { RootState } from 'types';

/* Wrap createSlice with stricter Name options */

/* istanbul ignore next */
export const createSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends keyof RootState
>(
  options: CreateSliceOptions<State, CaseReducers, Name>
) => {
  return createSliceOriginal(options);
};

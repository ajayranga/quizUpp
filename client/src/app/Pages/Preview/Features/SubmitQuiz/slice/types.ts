import { ResponseState } from 'app/Pages/Quiz/Features/Response/slice/types';

export interface SubmitQuizState {
  loading: boolean;
  error?: Error | null;
  success: boolean;
}

export interface responseType {
  name: string;
  dob: string;
  fatherName: string;
  address: string;
  docType: string;
  docNum: string;
  email: string;
  image: string;
  score: number;
  responses: ResponseState[];
}

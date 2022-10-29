import { responseType } from 'app/Pages/Preview/Features/SubmitQuiz/slice/types';
import { QuestionState } from 'app/Pages/Quiz/Features/Questions/slice/types';

export interface allResponseFromDBType extends responseType {
  createdAt: string;
  _id: string;
}
export interface ResponseForAdminState {
  allResponses: allResponseFromDBType[];
  userResponses: {
    userResponses: responseType | {};
    questions: QuestionState[];
  };
  pages: number;
  pageSize: number;
  pageNumber: number;
  totalRecords: number;
  loading: boolean;
  error: Error | null;
  success: boolean;
}
export interface FetchAllResponseType {
  allResponses: allResponseFromDBType[];
  pages: number;
  pageSize: number;
  pageNumber: number;
  totalRecords: number;
}
export interface FetchUserResponseType {
  userResponses: responseType | {};
  questions: QuestionState[];
}

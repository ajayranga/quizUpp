export interface AllResponsesState {
  responses: ResponseState[];
  loading: boolean;
  error: Error | null;
  success: boolean;
}
export interface ResponseState {
  qId: string;
  answer: string;
}

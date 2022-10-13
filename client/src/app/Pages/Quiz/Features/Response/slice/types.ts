export interface AllResponsesState {
  responses: any[];
  loading: boolean;
  error: Error | null;
  success: boolean;
}
export interface ResponseState {
  qId: string;
  answer: string;
}

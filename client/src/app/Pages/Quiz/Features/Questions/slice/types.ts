export interface AllQuestionsState {
  allQuestions: QuestionState[];
  loading: boolean;
  error: Error | null;
  success: boolean;
}
export interface QuestionState {
  _id: string;
  statement: string;
  answer: string;
  explanation: string;
  options: [Option, Option, Option, Option];
  __v: number;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}
interface Option {
  value: string;
  text: string;
}

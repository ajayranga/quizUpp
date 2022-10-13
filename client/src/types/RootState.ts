import { CredentailsState } from 'app/Pages/Credentials/Features/Credentials/slice/types';
import { CheckMailState } from 'app/Pages/Credentials/Features/CheckMail/slice/types';
import { UploadImageState } from 'app/Pages/Credentials/Features/UploadImage/slice/types';
import { AllQuestionsState } from 'app/Pages/Quiz/Features/Questions/slice/types';
import { TimerState } from 'app/Pages/Quiz/Features/Timer/slice/types';
import { AllResponsesState } from 'app/Pages/Quiz/Features/Response/slice/types';
import { SubmitQuizState } from 'app/Pages/Preview/Features/SubmitQuiz/slice/types';
import { ResponseForAdminState } from 'app/Pages/AdminAllResponses/Features/ResponsesForAdmin/slice/types';

export interface RootState {
  credentials: CredentailsState;
  checkMail: CheckMailState;
  uploadImage: UploadImageState;
  allQuestions: AllQuestionsState;
  submitQuiz: SubmitQuizState;
  timer: TimerState;
  allResponses: AllResponsesState;
  responseForAdmin: ResponseForAdminState;
}

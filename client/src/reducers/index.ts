import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import responseReducer from './responseReducer';
import credentialsReducer from './credentialsReducer';
import submitQuizReducer from './submitQuizReducer';
import uploadImageReducer from './uploadImageReducer';
import timerReducer from './timerReducer';
import checkMailReducer from './checkMailReducer';
import allResponsesReducer from './allResponsesReducer';

export default combineReducers({
  question: questionReducer,
  response: responseReducer,
  credentials: credentialsReducer,
  submitQuiz: submitQuizReducer,
  uploadImage: uploadImageReducer,
  timer: timerReducer,
  checkMail: checkMailReducer,
  adminAllResponses: allResponsesReducer,
});

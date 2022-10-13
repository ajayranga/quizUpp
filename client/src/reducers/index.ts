import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import responseReducer from './responseReducer';
import submitQuizReducer from './submitQuizReducer';
import timerReducer from './timerReducer';
import allResponsesReducer from './allResponsesReducer';

export default combineReducers({
  question: questionReducer,
  response: responseReducer,
  submitQuiz: submitQuizReducer,
  timer: timerReducer,
  adminAllResponses: allResponsesReducer,
});

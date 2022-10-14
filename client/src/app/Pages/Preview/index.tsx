import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import QuizSteps from 'app/components/QuizSteps';
import Question from 'app/components/Question';
import Meta from 'app/components/Meta';
import Loader from 'app/components/Loader';
import Message, { TContainer } from 'app/components/Message';

import {
  selectAllQuestions,
  selectLoading as selectAllQuestionsLoading,
  selectError as selectAllQuestionsError,
} from 'app/Pages/Quiz/Features/Questions/slice/selectors';
import {
  selectAllResponses,
  selectError as selectAllResponsesError,
  selectLoading as selectAllResponsesLoading,
} from 'app/Pages/Quiz/Features/Response/slice/selectors';
import { selectTime } from 'app/Pages/Quiz/Features/Timer/slice/selectors';
import {
  selectUserInfo,
  selectError as selectUserInfoError,
} from 'app/Pages/Credentials/Features/Credentials/slice/selectors';
import {
  // selectLoading as selectSubmitQuizLoading,
  selectError as selectSubmitQuizError,
  selectSuccess as selectSubmitQuizSuccess,
} from './Features/SubmitQuiz/slice/selectors';
import { UseSubmitQuizSlice } from './Features/SubmitQuiz/slice';
import { UseCredentialsSlice } from '../Credentials/Features/Credentials/slice';
import { UseAllResponsesSlice } from '../Quiz/Features/Response/slice';
import { UseUploadImageSlice } from '../Credentials/Features/UploadImage/slice';
import { checkMailActions } from '../Credentials/Features/CheckMail/slice';

// import { submitQuiz } from '../actions/quizSubmit';
// import * as types from '../actionTypes/submitQuiz';
// import { deleteCredentials } from '../actions/credentials';
// import { deleteResponses } from '../actions/responses';
// import { submitQuizClear } from '../actions/quizSubmit';
// import { uploadImageClear } from '../actions/uploadImage';

// export interface responseType {
//   userInfo: UserInfo;
//   response: ResponseState[];
//   questions: QuestionState[];
// }

function Preview() {
  const { actions } = UseSubmitQuizSlice();
  const { actions: credentailsActions } = UseCredentialsSlice();
  const { actions: responsesActions } = UseAllResponsesSlice();
  const { actions: submitQuizActions } = UseSubmitQuizSlice();
  const { actions: uploadImageActions } = UseUploadImageSlice();

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const closeModal = () => setShow(false);
  const closeModal2 = () => setShow2(false);
  const showModal = () => {
    setShow(true);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfoError = useSelector(selectUserInfoError);
  const allQuestions = useSelector(selectAllQuestions);
  const allQuestionsError = useSelector(selectAllQuestionsError);
  const questionLoading = useSelector(selectAllQuestionsLoading);
  const allResponses = useSelector(selectAllResponses);
  const allResponseError = useSelector(selectAllResponsesError);
  const responseLoading = useSelector(selectAllResponsesLoading);
  const time = useSelector(selectTime);
  const submitQuizError = useSelector(selectSubmitQuizError);
  const submitQuizSuccess = useSelector(selectSubmitQuizSuccess);

  const userInfo = useSelector(selectUserInfo);
  // const questions = useSelector(selectAllQuestions);
  // const response = useSelector(selectAllResponses);

  // const {
  //   allQuestions,
  //   loading: questionLoading,
  //   error: allQuestionsError,
  // } = useSelector((state: RootState) => state.question);

  // const {
  //   allResponses,
  //   loading: responseLoading,
  //   error: allResponseError,
  // } = useSelector((state: RootState) => state.response);
  // const {
  //   success,
  //   loading: submitQuizLoading,
  //   error: submitQuizError,
  // } = useSelector((state: RootState) => state.submitQuiz);

  // const {
  //   time,
  //   loading: timerLoading,
  //   error: timerError,
  // } = useSelector((state: RootState) => state.timer);

  const goBack = () => {
    navigate('/step2');
  };
  const clearSubmitError = () => {
    dispatch(actions.reset());
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (Object.keys(userInfo).length === 0) {
      navigate('/step1', { replace: true });
    }
  }, []); //eslint-disable-line

  useEffect(() => {
    setShow2(submitQuizSuccess);
    if (submitQuizSuccess === true) {
      setTimeout(() => {
        dispatch(credentailsActions.reset());
        dispatch(responsesActions.reset());
        dispatch(uploadImageActions.reset());
        dispatch(submitQuizActions.reset());
        dispatch(checkMailActions.reset());
        navigate('/step1');
      }, 4000);
    }
  }, [
    submitQuizSuccess,
    dispatch,
    navigate,
    credentailsActions,
    responsesActions,
    uploadImageActions,
    submitQuizActions,
  ]);

  const submitQuizHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(actions.start());
    closeModal();
  };

  return (
    <Container>
      <Meta title={'Preview Quiz'} />
      <QuizSteps stepsNum={3} />
      <h2 className="my-4">Here are your Responses</h2>
      {questionLoading || responseLoading ? (
        <Loader />
      ) : (
        <>
          <TContainer>
            {time === 0 && <Message variant="danger">Quiz Time is Up</Message>}
            {userInfoError && (
              <Message variant="danger">
                {JSON.stringify(userInfoError)}
              </Message>
            )}
            {allQuestionsError && (
              <Message variant="danger">
                {JSON.stringify(allQuestionsError)}
              </Message>
            )}
            {allResponseError && (
              <Message variant="danger">
                {JSON.stringify(allResponseError)}
              </Message>
            )}
            {submitQuizError && (
              <Message variant="danger" afterClose={clearSubmitError}>
                {JSON.stringify(submitQuizError)}
              </Message>
            )}
          </TContainer>
          <ListGroup className="questionsList">
            {allQuestions &&
              allQuestions.map((question: any, index: number) => (
                <Question
                  questionData={question}
                  index={index + 1}
                  key={index}
                  response={allResponses.find(
                    (que) => que.qId === question._id
                  )}
                  allResponses={allResponses}
                  readOnly={true}
                />
              ))}
          </ListGroup>
          <Row>
            <Col xs="6">
              <Button
                variant="secondary"
                type="submit"
                className="my-3 ms-"
                onClick={() => goBack()}
              >
                Previous
              </Button>
            </Col>
            <Col xs="6">
              <Button
                variant="primary"
                type="submit"
                className="my-3 ms-auto d-block"
                onClick={() => showModal()}
              >
                Submit Quiz
              </Button>
            </Col>
          </Row>
          <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Submit Your Quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure, You want to submit your Quiz</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button variant="primary" onClick={submitQuizHandler}>
                Submit Quiz
              </Button>
            </Modal.Footer>
          </Modal>
          {submitQuizSuccess && (
            <Modal show={show2} onHide={closeModal2}>
              <Modal.Header closeButton>
                <Modal.Title>Quiz Submitted</Modal.Title>
              </Modal.Header>
              <Modal.Body>Your Responses are recorded.!!!!!!</Modal.Body>
            </Modal>
          )}
        </>
      )}
    </Container>
  );
}

export default Preview;

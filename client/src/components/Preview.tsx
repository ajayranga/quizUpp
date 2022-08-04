import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import QuizSteps from './QuizSteps';
import Question from './Question';
import Meta from './Meta';
import Loader from './Loader';
import Message, { TContainer } from './Message';
import { submitQuiz } from '../actions/quizSubmit';
import * as types from '../actionTypes/submitQuiz';
import { deleteCredentials } from '../actions/credentials';
import { deleteResponses } from '../actions/responses';
import { submitQuizClear } from '../actions/quizSubmit';
import { uploadImageClear } from '../actions/uploadImage';

function Preview() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const closeModal = () => setShow(false);
  const closeModal2 = () => setShow2(false);
  const showModal = () => {
    setShow(true);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  interface RootState {
    credentials: {
      userInfo: any;
      loading: boolean;
      error: any;
    };
    question: {
      allQuestions: [any];
      loading: boolean;
      error: any;
    };
    response: {
      allResponses: [any];
      loading: boolean;
      error: any;
    };
    submitQuiz: {
      success: boolean;
      loading: boolean;
      error: any;
    };
    timer: { time: number; loading: boolean; error: any };
  }

  const {
    userInfo,
    loading: userInfoLoading,
    error: userInfoError,
  } = useSelector((state: RootState) => state.credentials);

  const {
    allQuestions,
    loading: questionLoading,
    error: allQuestionsError,
  } = useSelector((state: RootState) => state.question);

  const {
    allResponses,
    loading: responseLoading,
    error: allResponseError,
  } = useSelector((state: RootState) => state.response);
  const {
    success,
    loading: submitQuizLoading,
    error: submitQuizError,
  } = useSelector((state: RootState) => state.submitQuiz);

  const {
    time,
    loading: timerLoading,
    error: timerError,
  } = useSelector((state: RootState) => state.timer);

  const goBack = () => {
    navigate('/step2');
  };
  const clearSubmitError = () => {
    dispatch({ type: types.QUIZ_SUBMIT_CLEAR });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (Object.keys(userInfo).length === 0) {
      navigate('/step1', { replace: true });
    }
  }, []);

  useEffect(() => {
    setShow2(success);
    if (success === true) {
      setTimeout(() => {
        dispatch(deleteCredentials());
        dispatch(deleteResponses());
        dispatch(uploadImageClear());
        dispatch(submitQuizClear());
        navigate('/step1');
      }, 4000);
    }
  }, [success, dispatch]);

  const submitQuizHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(submitQuiz());
    closeModal();
  };
  return (
    <Container>
      <Meta title={'Preview Quiz'} />
      <QuizSteps stepsNum={3} />
      <h2 className='my-4'>Here are your Responses</h2>
      {questionLoading || responseLoading ? (
        <Loader />
      ) : (
        <>
          <TContainer>
            {time === 0 && <Message variant='danger'>Quiz Time is Up</Message>}
            {Object.keys(userInfoError).length > 0 && (
              <Message variant='danger'>
                {JSON.stringify(userInfoError)}
              </Message>
            )}
            {Object.keys(allQuestionsError).length > 0 && (
              <Message variant='danger'>
                {JSON.stringify(allQuestionsError)}
              </Message>
            )}
            {Object.keys(allResponseError).length > 0 && (
              <Message variant='danger'>
                {JSON.stringify(allResponseError)}
              </Message>
            )}
            {Object.keys(submitQuizError).length > 0 && (
              <Message variant='danger' afterClose={clearSubmitError}>
                {JSON.stringify(submitQuizError)}
              </Message>
            )}
          </TContainer>
          <ListGroup className='questionsList'>
            {allQuestions &&
              allQuestions.map((question: any, index: number) => (
                <Question
                  questionData={question}
                  index={index + 1}
                  key={index}
                  response={allResponses.find(
                    (que) => que.qId === question._id
                  )}
                  readOnly={true}
                />
              ))}
          </ListGroup>
          <Row>
            <Col xs='6'>
              <Button
                variant='secondary'
                type='submit'
                className='my-3 ms-'
                onClick={() => goBack()}
              >
                Previous
              </Button>
            </Col>
            <Col xs='6'>
              <Button
                variant='primary'
                type='submit'
                className='my-3 ms-auto d-block'
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
              <Button variant='secondary' onClick={closeModal}>
                Close
              </Button>
              <Button variant='primary' onClick={submitQuizHandler}>
                Submit Quiz
              </Button>
            </Modal.Footer>
          </Modal>
          {success && (
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

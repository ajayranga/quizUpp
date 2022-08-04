import React, { useState, useEffect } from 'react';
import { FcAlarmClock } from 'react-icons/fc';
import { BsCheck2Circle } from 'react-icons/bs';
import { Container, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import QuizSteps from './QuizSteps';
import Question from './Question';
import { getAllQuestions } from '../actions/question';
import { tickTimer } from '../actions/timer';
import Meta from './Meta';
import Loader from './Loader';
import Message, { TContainer } from './Message';

function Quiz() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(60);
  const [currentQuestion, setCurrentQuestion] = useState(0);
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
    time,
    loading: timerLoading,
    error: timerError,
  } = useSelector((state: RootState) => state.timer);

  useEffect(() => {
    if (allQuestions.length < 1) {
      dispatch(getAllQuestions());
    }
  }, [allQuestions, dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (Object.keys(userInfo).length === 0) {
      navigate('/step1', { replace: true });
    }
    setCounter(time);
  }, []);

  useEffect(() => {
    if (time === 0) navigate('/step3');
    const timer: any = setInterval(() => {
      if (time > 0) {
        setCounter(counter - 1);
        dispatch(tickTimer());
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [counter, time]);

  const goBack = () => {
    navigate('/step1');
  };

  const goForward = () => {
    navigate('/step3');
  };
  return (
    <Container>
      <Meta title={'Your Quiz'} />
      <QuizSteps stepsNum={2} />
      <div className='timerContainer'>
        <h2 className='my-4'>Welcome to the Quiz</h2>
        <span>
          <FcAlarmClock size={'30px'} className='ticking-clock' />
          {Math.floor(counter / 60)}:{counter - Math.floor(time / 60) * 60} s.
        </span>
      </div>
      {questionLoading || responseLoading ? (
        <Loader />
      ) : (
        <>
          <TContainer>
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
          </TContainer>
          <ListGroup className='questionsList'>
            {allQuestions.length > 0 && (
              <Question
                questionData={allQuestions[currentQuestion]}
                index={currentQuestion + 1}
                key={currentQuestion}
                response={allResponses.find(
                  (que) => que.qId === allQuestions[currentQuestion]._id
                )}
                readOnly={false}
              />
            )}
            <h4>Go To Question</h4>
            <div className='allQuestionButtonsContainer'>
              {allQuestions.length > 0 &&
                allQuestions.map((que, index) => (
                  <Button
                    key={index}
                    className={`px-5 m-2`}
                    variant={
                      currentQuestion === index
                        ? 'secondary'
                        : 'outline-success'
                    }
                    onClick={() => setCurrentQuestion(index)}
                  >
                    {allResponses.find((resp) => resp.qId === que._id) ? (
                      <BsCheck2Circle />
                    ) : (
                      index + 1
                    )}
                  </Button>
                ))}
            </div>
          </ListGroup>
          <Row>
            <Col xs='6'>
              <Button
                variant='secondary'
                className='my-3 ms-2'
                onClick={() => goBack()}
              >
                Go Back
              </Button>
            </Col>
            <Col xs='6'>
              <Button
                variant='primary'
                className='my-3 ms-auto d-block'
                onClick={() => goForward()}
              >
                Preview
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Quiz;

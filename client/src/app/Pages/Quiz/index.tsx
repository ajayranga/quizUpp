import React, { useState, useEffect } from 'react';
import { FcAlarmClock } from 'react-icons/fc';
import { BsCheck2Circle } from 'react-icons/bs';
import { Container, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Meta from 'app/components/Meta';
import Loader from 'app/components/Loader';
import Message, { TContainer } from 'app/components/Message';
import QuizSteps from 'app/components/QuizSteps/loadable';
import Question from 'app/components/Question/loadable';

import { UseAllQuestionsSlice } from './Features/Questions/slice';
import { UseTimerSlice } from './Features/Timer/slice';

import {
  selectAllQuestions,
  selectLoading as selectAllQuestionsLoading,
  selectError as selectAllQuestionsError,
} from './Features/Questions/slice/selectors';
import { selectTime } from './Features/Timer/slice/selectors';
import { QuestionState } from './Features/Questions/slice/types';
import {
  selectAllResponses,
  selectError as selectAllResponsesError,
  selectLoading as selectAllResponsesLoading,
} from './Features/Response/slice/selectors';
import {
  selectError as selectUserInfoError,
  selectUserInfo,
  // selectUserInfo,
} from '../Credentials/Features/Credentials/slice/selectors';
import { ResponseState } from './Features/Response/slice/types';
import { UseCredentialsSlice } from '../Credentials/Features/Credentials/slice';

function Quiz() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(60);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  UseCredentialsSlice();
  const { actions: QuestionsActions } = UseAllQuestionsSlice();
  const { actions: TimerActions } = UseTimerSlice();

  const allQuestions = useSelector(selectAllQuestions);
  const time = useSelector(selectTime);
  const allResponses = useSelector(selectAllResponses);

  const userInfo = useSelector(selectUserInfo);
  const userInfoError = useSelector(selectUserInfoError);
  const allQuestionsError = useSelector(selectAllQuestionsError);
  const allResponseError = useSelector(selectAllResponsesError);
  const questionLoading = useSelector(selectAllQuestionsLoading);
  const responseLoading = useSelector(selectAllResponsesLoading);

  useEffect(() => {
    if (allQuestions && allQuestions.length < 1) {
      dispatch(QuestionsActions.fetchStart());
    }
  }, [allQuestions, QuestionsActions, dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (Object.keys(userInfo).length === 0)
      navigate('/step1', { replace: true });
    setCounter(time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, userInfo]);

  useEffect(() => {
    if (time === 0) navigate('/step3');
    const timer: NodeJS.Timer = setInterval(() => {
      if (time > 0) {
        setCounter(counter - 1);
        dispatch(TimerActions.tick());
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [counter, navigate, dispatch, TimerActions, time]);

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
      <div className="timerContainer">
        <h2 className="my-4">Welcome to the Quiz</h2>
        <span>
          <FcAlarmClock size={'30px'} className="ticking-clock" />
          {Math.floor(counter / 60)}:{counter - Math.floor(time / 60) * 60} s.
        </span>
      </div>
      {questionLoading || responseLoading ? (
        <Loader />
      ) : (
        <>
          <TContainer>
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
          </TContainer>
          <ListGroup className="questionsList">
            {allQuestions && allQuestions.length > 0 && (
              <Question
                questionData={allQuestions[currentQuestion]}
                index={currentQuestion + 1}
                response={allResponses.find(
                  (que: ResponseState) =>
                    que.qId === allQuestions[currentQuestion]._id
                )}
                key={currentQuestion}
              />
            )}
            <h4>Go To Question</h4>
            <div className="allQuestionButtonsContainer">
              {allQuestions &&
                allQuestions.length > 0 &&
                allQuestions.map((que: QuestionState, index: number) => (
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
            <Col xs="6">
              <Button
                variant="secondary"
                className="my-3 ms-2"
                onClick={() => goBack()}
              >
                Go Back
              </Button>
            </Col>
            <Col xs="6">
              <Button
                variant="primary"
                className="my-3 ms-auto d-block"
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

import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Question from './Question';
import Meta from './Meta';
import Loader from './Loader';
import Message, { TContainer } from './Message';
import { getUserResponses } from '../actions/allResponses';

type Props = {};

const AdminPreview = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const { userId } = params;

  interface RootState {
    adminAllResponses: {
      allResponses: [any];
      userResponses: any;
      loading: boolean;
      error: any;
    };
  }

  const {
    allResponses,
    userResponses: { userResponses, questions },
    loading,
    error,
  } = useSelector((state: RootState) => state.adminAllResponses);

  useEffect(() => {
    dispatch(getUserResponses(userId));
  }, [userId]);

  return (
    <Container>
      <Meta title={`Preview Of ${userResponses && userResponses.name}`} />
      <h2 className='my-3'>
        Here Is the Preview of {userResponses && userResponses.name}'s Quiz
      </h2>
      <ListGroup className='questionsList'>
        {questions &&
          questions.map((question: any, index: number) => (
            <Question
              questionData={question}
              index={index + 1}
              key={index}
              response={userResponses.responses.find(
                (que: any) => que.qId === question._id
              )}
              readOnly={true}
              adminPreview
            />
          ))}
      </ListGroup>
    </Container>
  );
};

export default AdminPreview;

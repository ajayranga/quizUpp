import React, { useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Question from 'app/components/Question/loadable';
import Meta from 'app/components/Meta';
import { UseResponseForAdminSlice } from '../AdminAllResponses/Features/ResponsesForAdmin/slice';
import { selectUserResponses } from '../AdminAllResponses/Features/ResponsesForAdmin/slice/selectors';

type Props = {};

const AdminPreview = (props: Props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const userId = params.userId ? params.userId : '';
  const { actions } = UseResponseForAdminSlice();

  const userResponses = useSelector(selectUserResponses);
  const questions = userResponses.questions;

  useEffect(() => {
    dispatch(actions.fetchUserStart(userId));
  }, [actions, dispatch, userId]);
  // console.log(userResponses);
  return (
    <Container>
      <Meta
        title={`Preview Of ${
          'name' in userResponses.userResponses &&
          userResponses.userResponses.name
        }`}
      />
      <h2 className="my-3">
        Here Is the Preview of{' '}
        {'name' in userResponses.userResponses &&
          userResponses.userResponses.name}
        's Quiz
      </h2>
      <Link to="/admin">Go back</Link>
      <ListGroup className="questionsList">
        {questions &&
          questions.map((question: any, index: number) => (
            <Question
              questionData={question}
              index={index + 1}
              key={index}
              response={
                'responses' in userResponses.userResponses &&
                userResponses.userResponses.responses.find(
                  (que: any) => que.qId === question._id
                )
              }
              readOnly={true}
              adminPreview
            />
          ))}
      </ListGroup>
    </Container>
  );
};

export default AdminPreview;

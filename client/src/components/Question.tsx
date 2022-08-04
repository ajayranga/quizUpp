import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { submitResponse } from '../actions/responses';

const Question = ({
  questionData,
  index,
  response,
  readOnly,
  adminPreview,
}: any) => {
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (answer) dispatch(submitResponse({ qId: questionData._id, answer }));
  }, [answer, questionData, dispatch]);

  useEffect(() => {
    if (response && answer === '') {
      setAnswer(response.answer);
    }
  }, [response, answer]);

  return (
    <ListGroup.Item className='question my-2'>
      <h5 className='questionText d-flex'>
        {index}.
        {adminPreview ? (
          <p
            className={`capital-first-letter ms-1 ${
              questionData.answer === answer ? 'text-success' : 'text-danger'
            }`}
          >
            {questionData.statement}
          </p>
        ) : (
          <p className={`capital-first-letter ms-1`}>
            {questionData.statement}
          </p>
        )}
      </h5>
      {questionData &&
        questionData.options.map((option: any, index: number) =>
          !adminPreview ? (
            <ListGroup.Item
              key={index}
              className={`option d-flex ${
                option.value === answer && 'bg-secondary text-light'
              } ${readOnly === true && 'read-only'}`}
              onClick={() => readOnly === false && setAnswer(option.value)}
            >
              <span>{option.value.toUpperCase()}.</span>
              <span className='capital-first-letter ms-1'> {option.text}</span>
            </ListGroup.Item>
          ) : (
            <ListGroup.Item
              key={index}
              className={`option d-flex 
              ${option.value === answer && 'bg-secondary text-light'} 
              ${option.value === questionData.answer && 'bg-info text-light'}
                            ${readOnly === true && 'read-only'}`}
              onClick={() => readOnly === false && setAnswer(option.value)}
            >
              <span>{option.value.toUpperCase()}.</span>
              <span className='capital-first-letter ms-1'> {option.text}</span>
            </ListGroup.Item>
          )
        )}
    </ListGroup.Item>
  );
};

export default Question;

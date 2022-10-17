import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { UseAllResponsesSlice } from 'app/Pages/Quiz/Features/Response/slice';

const Question = ({
  questionData,
  index,
  response = {},
  readOnly = false,
  adminPreview = false,
}: any) => {
  const dispatch = useDispatch();
  const { actions } = UseAllResponsesSlice();

  return (
    <ListGroup.Item className="question my-2">
      <h5 className="questionText d-flex">
        {index}.{' '}
        <p
          className={`capital-first-letter ms-1 ${
            adminPreview
              ? questionData.answer === response.answer
                ? 'text-success'
                : 'text-danger'
              : ''
          }`}
        >
          {questionData.statement}
        </p>
      </h5>
      {questionData &&
        questionData.options.map((option: any, index: number) => (
          <ListGroup.Item
            key={index}
            className={`option d-flex 
            ${
              adminPreview &&
              option.value === response.answer &&
              'strikethrough'
            }
            ${
              adminPreview
                ? option.value === questionData.answer &&
                  'bg-info text-light not-strikethrough'
                : option.value === response.answer &&
                  'bg-secondary text-light not-strikethrough'
            }
             ${readOnly === true && 'read-only'}`}
            onClick={() =>
              readOnly === false &&
              dispatch(
                actions.submit({
                  qId: questionData._id,
                  answer: option.value,
                })
              )
            }
          >
            <span>{option.value.toUpperCase()}.</span>
            <span className="capital-first-letter ms-1"> {option.text}</span>
          </ListGroup.Item>
        ))}
    </ListGroup.Item>
  );
};

export default Question;

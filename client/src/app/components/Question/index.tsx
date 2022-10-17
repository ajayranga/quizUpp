import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { UseAllResponsesSlice } from 'app/Pages/Quiz/Features/Response/slice';
import { QuestionState } from 'app/Pages/Quiz/Features/Questions/slice/types';
import { ResponseState } from 'app/Pages/Quiz/Features/Response/slice/types';

type props = {
  questionData: QuestionState;
  index: number;
  response?: ResponseState | {};
  readOnly?: boolean;
  adminPreview?: boolean;
};
const Question = ({
  questionData,
  index,
  response = {},
  readOnly = false,
  adminPreview = false,
}: props) => {
  const dispatch = useDispatch();
  const { actions } = UseAllResponsesSlice();

  return (
    <ListGroup.Item className="question my-2">
      <h5 className="questionText d-flex">
        {index}.{' '}
        <p
          className={`capital-first-letter ms-1 ${
            'answer' in response && adminPreview
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
        'answer' in response &&
        questionData.options.map((option, index: number) => (
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

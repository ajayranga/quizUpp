import React, { useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UseResponseForAdminSlice } from 'app/Pages/AdminAllResponses/Features/ResponsesForAdmin/slice';

type Props = {
  pageNumber: number;
  totalPages: number;
};
const Paginate = ({ pageNumber, totalPages }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const pageNumParam: number = params.pageNumber
    ? parseInt(params.pageNumber)
    : 0;
  const { actions: ResponseForAdminAction } = UseResponseForAdminSlice();

  useEffect(() => {
    dispatch(ResponseForAdminAction.fetchAllStart(pageNumParam));
  }, [ResponseForAdminAction, dispatch, pageNumParam]);

  return (
    <>
      {totalPages > 1 ? (
        <Pagination className="mx-auto width-max-content">
          <Pagination.First onClick={() => navigate('/admin/1')} />
          <Pagination.Prev
            onClick={() =>
              navigate(`/admin/${pageNumber <= 1 ? 1 : pageNumber - 1}`)
            }
          />
          {Array.from(Array(totalPages).keys()).map((key: number) => (
            <Pagination.Item
              key={key + 1}
              active={key + 1 === pageNumber}
              onClick={() => navigate(`/admin/${key + 1}`)}
            >
              {key + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() =>
              navigate(
                `/admin/${
                  pageNumber === totalPages ? pageNumber : pageNumber + 1
                }`
              )
            }
          />
          <Pagination.Last onClick={() => navigate(`/admin/${totalPages}`)} />
        </Pagination>
      ) : (
        <></>
      )}
    </>
  );
};

export default Paginate;

import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoEnterOutline } from 'react-icons/io5';

import Paginate from 'app/components/Paginate/loadable';
import { UseResponseForAdminSlice } from './Features/ResponsesForAdmin/slice';
import {
  selectAllResponses,
  selectPageNumber,
  selectPages,
} from './Features/ResponsesForAdmin/slice/selectors';

type Props = {};

const AdminAllResponses = (props: Props) => {
  const dispatch = useDispatch();
  const { actions: ResponseForAdminActions } = UseResponseForAdminSlice();
  const pageNumber = useSelector(selectPageNumber);
  const pages = useSelector(selectPages);
  const allResponses = useSelector(selectAllResponses);

  useEffect(() => {
    dispatch(ResponseForAdminActions.fetchAllStart(pageNumber));
  }, [ResponseForAdminActions, dispatch, pageNumber]);

  return (
    <Container>
      <h2 className="my-3">Here are the responses of all students</h2>
      <Table responsive bordered hover striped>
        <thead>
          <tr>
            <td> #</td>
            <td>Name</td>
            <td>Father name</td>
            <td>Doc. Num.</td>
            <td>Email</td>
            <td>Date</td>
            <td>Time</td>
            <td>Score</td>
            <td>Answers</td>
          </tr>
        </thead>
        <tbody>
          {allResponses &&
            allResponses.map((res, index) => (
              <tr key={index}>
                <td> {(pageNumber - 1) * 10 + index + 1}.</td>
                <td> {res.name}</td>
                <td> {res.fatherName}</td>
                <td> {res.docNum}</td>
                <td> {res.email}</td>
                <td> {new Date(res.createdAt).toLocaleDateString()}</td>
                <td> {new Date(res.createdAt).toLocaleTimeString()}</td>
                <td> {res.score}</td>
                <td>
                  <Link to={`/admin/response/${res._id}`}>
                    <IoEnterOutline />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Paginate pageNumber={pageNumber} totalPages={pages} />
    </Container>
  );
};

export default AdminAllResponses;

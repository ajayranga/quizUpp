import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoEnterOutline } from 'react-icons/io5';

import QuizSteps from './QuizSteps';
import Meta from './Meta';
import Loader from './Loader';
import Message, { TContainer } from './Message';
import Paginate from './Paginate';
import { getAllResponses } from '../actions/allResponses';

type Props = {};

const AdminAllResponses = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  interface RootState {
    // credentials: {
    //   userInfo: any;
    //   loading: boolean;
    // };
    // uploadImage: {
    //   imageUrl: string;
    //   loading: boolean;
    //   error: any;
    //   success: boolean;
    // };
    // submitQuiz: {
    //   success: boolean;
    //   loading: boolean;
    //   error: any;
    // };
    adminAllResponses: {
      allResponses: [any];
      pages: number;
      pageSize: number;
      pageNumber: number;
      success: boolean;
      loading: boolean;
      error: any;
    };
  }

  const { allResponses, pages, pageSize, pageNumber, loading, error } =
    useSelector((state: RootState) => state.adminAllResponses);

  useEffect(() => {
    dispatch(getAllResponses());
  }, []);

  return (
    <Container>
      <h2 className='my-3'>Here are the responses of all students</h2>
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

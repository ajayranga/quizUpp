import React from 'react';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

export default function App() {
  return (
    <footer className='text-center'>
      <Container className='p-4'>
        <section className='mb-4'>
          <a
            className='btn btn-outline btn-floating m-1  rounded-pill'
            href='#!'
            role='button'
          >
            <FaFacebook size={'22px'} />
          </a>

          <a
            className='btn btn-outline btn-floating m-1  rounded-pill'
            href='#!'
            role='button'
          >
            <FaTwitter size={'22px'} />
          </a>

          <a
            className='btn btn-outline btn-floating m-1  rounded-pill'
            href='#!'
            role='button'
          >
            <FaGoogle size={'22px'} />
          </a>

          <a
            className='btn btn-outline btn-floating m-1  rounded-pill'
            href='#!'
            role='button'
          >
            <FaInstagram size={'22px'} />
          </a>

          <a
            className='btn btn-outline btn-floating m-1  rounded-pill'
            href='#!'
            role='button'
          >
            <FaLinkedinIn size={'22px'} />
          </a>

          <a
            className='btn btn-outline btn-floating m-1  rounded-pill'
            href='#!'
            role='button'
          >
            <FaGithub size={'22px'} />
          </a>
        </section>

        <section className=''>
          <Form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <Col md='5' start='12'>
                <Form.Control
                  type='email'
                  className='mb-4'
                  placeholder='Email Address'
                />
              </Col>

              <div className='col-auto'>
                <Button color='light' type='submit' className='mb-4'>
                  Subscribe
                </Button>
              </div>
            </div>
          </Form>
        </section>

        <section className='mb-4'>
          <p>
            Do you want to participate in quizzes? With the help of Quiz App
            this becomes all very simple. With this app you can take and share
            quizzes.
          </p>
        </section>
        {/* 
        <section className=''>
          <Row>
            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </section> */}
      </Container>

      <div className='text-center p-1'>Designed and Developed by Mr Unique</div>
      <div
        className='text-center p-1'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2020 Copyright: Home Depot
      </div>
    </footer>
  );
}

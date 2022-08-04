import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Col, Row, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import QuizSteps from './QuizSteps';
import Meta from './Meta';
import Loader from './Loader';
import Message, { TContainer } from './Message';
import { saveCredentials } from '../actions/credentials';
import { uploadImage, uploadImageClear } from '../actions/uploadImage';
import { checkMail, setCheckMailClear } from '../actions/checkMail';

function Credentials() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('2000-01-01');
  const [fatherName, setFatherName] = useState('');
  const [address, setAddress] = useState('');
  const [docType, setDocType] = useState('aadhar');
  const [docNum, setDocNum] = useState('');
  const [image, setImage] = useState('');
  const [check, setCheck] = useState(false);
  const [uploading, setUploading] = useState(false);

  interface RootState {
    credentials: {
      userInfo: any;
      loading: boolean;
    };
    uploadImage: {
      imageUrl: string;
      loading: boolean;
      error: any;
      success: boolean;
    };
    submitQuiz: {
      success: boolean;
      loading: boolean;
      error: any;
    };
    checkMail: {
      isExist: boolean;
      success: boolean;
      loading: boolean;
      error: any;
    };
  }

  const { userInfo, loading } = useSelector(
    (state: RootState) => state.credentials
  );
  const {
    imageUrl,
    loading: uploadImageLoading,
    success,
    error,
  } = useSelector((state: RootState) => state.uploadImage);

  const { success: succesSubmitQuiz } = useSelector(
    (state: RootState) => state.submitQuiz
  );
  const {
    isExist,
    loading: checkMailLoading,
    success: checkMailSuccess,
    error: checkMailError,
  } = useSelector((state: RootState) => state.checkMail);

  useEffect(() => {
    if (userInfo) {
      userInfo.name && setName(userInfo.name);
      userInfo.email && setEmail(userInfo.email);
      userInfo.dob && setDob(userInfo.dob);
      userInfo.fatherName && setFatherName(userInfo.fatherName);
      userInfo.address && setAddress(userInfo.address);
      userInfo.docType && setDocType(userInfo.docType);
      userInfo.image && setImage(userInfo.image);
      userInfo.docNum && setDocNum(userInfo.docNum);
    }
  }, [
    userInfo,
    userInfo.name,
    userInfo.dob,
    userInfo.fatherName,
    userInfo.address,
    userInfo.docType,
    userInfo.image,
    userInfo.docNum,
  ]);

  useEffect(() => {
    if (imageUrl) setImage(imageUrl);
  }, [imageUrl]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    email && dispatch(checkMail(email));
    if (
      validated === true &&
      form.checkValidity() === true &&
      isExist === false
    ) {
      dispatch(
        saveCredentials({
          name,
          dob,
          fatherName,
          address,
          docType,
          docNum,
          email,
          image,
        })
      );
      navigate('/step2');
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const uploadFileHandler = (e: any) => {
    dispatch(uploadImage(e.target.files[0]));
  };

  return (
    <>
      <Meta title={'Credentials'} />
      <TContainer>
        {Object.keys(error).length > 0 && (
          <Message variant='danger' afterClose={() => uploadImageClear()}>
            {JSON.stringify(error)}
          </Message>
        )}
        {Object.keys(checkMailError).length > 0 && (
          <Message
            variant='danger'
            afterClose={() => dispatch(setCheckMailClear())}
          >
            {JSON.stringify(checkMailError)}
          </Message>
        )}
        {isExist === true && (
          <Message
            variant='danger'
            afterClose={() => dispatch(setCheckMailClear())}
          >
            Email already exist!!!
          </Message>
        )}
      </TContainer>
      <Container>
        <QuizSteps stepsNum={1} />
        {loading ? (
          <Loader />
        ) : checkMailLoading ? (
          <Loader />
        ) : (
          <>
            <Form noValidate validated={validated} onSubmit={submitHandler}>
              <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter full name'
                  value={name}
                  minLength={4}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  Must be more than 4 character long
                </Form.Control.Feedback>
                <Form.Text className='text-muted'>
                  Note:- Name must be same as in document.
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicDob'>
                <Form.Label>Date of Birth.</Form.Label>
                <Form.Control
                  type='date'
                  value={dob}
                  max={new Date('2005/01/01').toISOString().split('T')[0]}
                  onChange={(e) => setDob(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  Minimum age is 17
                </Form.Control.Feedback>
                <Form.Text className='text-muted'>
                  Note:- Min. age is 17.
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicFatherName'>
                <Form.Label>Father Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Father name'
                  value={fatherName}
                  required
                  minLength={4}
                  onChange={(e) => setFatherName(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  Must be more than 4 character long
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicAddress'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your Address'
                  value={address}
                  required
                  minLength={4}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  Must be more than 4 character long
                </Form.Control.Feedback>
              </Form.Group>
              <Row>
                <Form.Group
                  as={Col}
                  md='5'
                  className='mb-3'
                  controlId='formDocType'
                >
                  <Form.Label>Select Document</Form.Label>
                  <Form.Control
                    as='select'
                    aria-label='Select your Document'
                    value={docType}
                    required
                    onChange={(e) => setDocType(e.target.value)}
                  >
                    <option value='aadhar'>Aadhar card</option>
                    <option value='voterid'>Voter ID card</option>
                    <option value='passport'>Passport</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group
                  as={Col}
                  className='mb-3'
                  controlId='formBasicDocNum'
                >
                  <Form.Label>Document Number</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={
                      docType === 'aadhar'
                        ? 'Enter your 12 digit Aadhar number'
                        : 'Enter your 10 digit Document Number'
                    }
                    value={docNum}
                    minLength={docType === 'aadhar' ? 12 : 10}
                    maxLength={docType === 'aadhar' ? 12 : 10}
                    required
                    onChange={(e) => setDocNum(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>
                    {docType === 'aadhar'
                      ? 'Enter your 12 digit Aadhar number'
                      : 'Enter your 10 digit Document Number'}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='Enter email'
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  Invalid email!
                </Form.Control.Feedback>
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={name && name}
                  roundedCircle
                  height='50'
                  width='50'
                />
              )}
              <Row>
                {uploadImageLoading ? (
                  <Loader />
                ) : (
                  <Form.Group
                    as={Col}
                    md='6'
                    controlId='formFile'
                    className='mb-3'
                  >
                    <Form.Label>Select Your Profile Pic.</Form.Label>
                    <Form.Control
                      type='file'
                      placeholder='Choose your image'
                      capture='environment'
                      accept='image/*'
                      onChange={uploadFileHandler}
                    />
                  </Form.Group>
                )}
                <Form.Group
                  as={Col}
                  md='6'
                  className='mb-3'
                  controlId='formBasicPicUrl'
                >
                  <Form.Label>Or Paste Pic URL</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter pic url'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check
                  type='checkbox'
                  label='I agree that all the details provided by me are genuine and true. And i agree with all the Terms of Services and Privacy Policy of Home Depot.'
                  checked={check}
                  required
                  onChange={(e) => setCheck(e.target.checked)}
                  feedback='You must agree before submitting.'
                  feedbackType='invalid'
                />
              </Form.Group>
              <Button variant='primary' type='submit' className='mb-5'>
                Go To Quiz
              </Button>
            </Form>
          </>
        )}
      </Container>
    </>
  );
}

export default Credentials;

import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const Message = ({ variant, children, afterClose, status }: any) => {
  const [show, setShow] = useState(status);
  return (
    <Toast
      onClose={() => {
        setShow(false);
        afterClose && afterClose();
      }}
      bg={variant.toLowerCase()}
      show={show}
      // delay={3000}
      // autohide
    >
      <Toast.Header>
        <img
          src='logo192.png'
          className='rounded me-2'
          alt=''
          height='20'
          width='20'
        />
        <strong className='me-auto'>Message</strong>
        <small>Just Now</small>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

Message.defaultProps = { varaint: 'info', status: true };

export const TContainer = (props: any) => {
  return (
    <ToastContainer className='p-5' position='top-end' style={{ zIndex: '2' }}>
      {props.children}
    </ToastContainer>
  );
};

export default Message;

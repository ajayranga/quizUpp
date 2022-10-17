import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

type props = {
  variant: 'danger' | 'success' | 'info';
  children: string;
  afterClose?: () => void;
  status: boolean;
};
const Message = ({ variant, children, afterClose, status }: props) => {
  const [show, setShow] = useState(status);
  return (
    <Toast
      onClose={() => {
        setShow(false);
        afterClose && afterClose();
      }}
      bg={variant.toLowerCase()}
      show={show}
    >
      <Toast.Header>
        <img
          src="logo192.png"
          className="rounded me-2"
          alt=""
          height="20"
          width="20"
        />
        <strong className="me-auto">Message</strong>
        <small>Just Now</small>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

Message.defaultProps = { varaint: 'info', status: true };

type props2 = {
  children: React.ReactNode;
};
export const TContainer = ({ children }: props2) => {
  return (
    <ToastContainer className="p-5" position="top-end" style={{ zIndex: '2' }}>
      {children}
    </ToastContainer>
  );
};

export default Message;

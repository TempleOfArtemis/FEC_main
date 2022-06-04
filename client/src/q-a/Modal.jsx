/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Modal, CloseButton } from './q&a-styled-components/q&aSectionContainerStyle';
import Form from './Form.jsx';

export default function ModalPopup({ show, handleExit, questionId, productName }) {
  // ModalPopup function is only created to utilize styled components,
  // and pass down props to the Form component
  return (
    <Modal show={show}>
      <div>
        <Form questionId={questionId} productName={productName} handleExit={handleExit} />
      </div>
    </Modal>
  );
}

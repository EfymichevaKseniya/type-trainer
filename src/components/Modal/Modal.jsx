import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { Sidebar } from '../Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ResultPopUp = () => {
  const { isResult } = useSelector((state) => state.typeTrainer);
  const [show, setShow] = useState(isResult);

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Ваш результат</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Sidebar onClick = {() => handleClose} />
        </Modal.Body>
      </Modal>
    </>
  )
}
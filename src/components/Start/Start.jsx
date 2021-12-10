import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { startTyping } from '../../store/typeTrainerSlice';
import fetchText from '../../store/ActionCreatorTrainer';
import LangMenu from '../MenuLang/MenuLang';

export const Start = () => {
  const { isStart, lang } = useSelector((state) => state.typeTrainer);
  const [show, setShow] = useState(isStart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startTyping());
    setShow(show);
    dispatch(fetchText(lang));
  }

  return (
    <>
      <Modal
        size="lg"
        show={isStart}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Body>
          <Modal.Title id='contained-modal-title-vcenter'>Проверьте свои навыки печати</Modal.Title>
        </Modal.Body>
        <Modal.Footer>
          <Button size='lg' onClick={handleClick}>
            Начать
          </Button>
          <LangMenu />
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Start;

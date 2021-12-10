import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { resetState, startTyping } from '../../store/typeTrainerSlice';
import { Sidebar } from '../Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchText from '../../store/ActionCreatorTrainer';

export const ResultPopUp = () => {
  const { isResult, lang } = useSelector((state) => state.typeTrainer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startTyping());
    dispatch(resetState());
    dispatch(fetchText(lang));
  }

  return (
    <>
      <Modal
        size="lg"
        show={isResult}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Modal.Title id="contained-modal-title-vcenter">Ваш результат</Modal.Title>
          <Sidebar/>
        </Modal.Body>
        <Modal.Footer>
          <Button size='lg' onClick={handleClick}>
              Попробовать еще раз
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
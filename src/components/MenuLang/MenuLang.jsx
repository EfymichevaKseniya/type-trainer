import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../../store/typeTrainerSlice';
import {  Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const LangMenu = () => {
  const { lang } = useSelector((state) => state.typeTrainer);
  const dispatch = useDispatch();

  return (
    <>
      <Dropdown>
          <Dropdown.Toggle size='lg' variant="info" id="dropdown-basic">
              {lang === 'eng' && 'английский'}
              {lang === 'rus' && 'русский'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
              <Dropdown.Item eventKey='1' onClick={() => dispatch(changeLang('rus'))}>русский</Dropdown.Item>
              <Dropdown.Item eventKey='2' onClick={() => dispatch(changeLang('eng'))}>английский</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default LangMenu;

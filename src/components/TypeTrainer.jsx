import React, { useEffect } from 'react';
import { TypingPlace } from "./TypingPlace/TypingPlace";
import classess from "./TypeTrainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import fetchText from '../store/ActionCreatorTrainer';
import { setText, isRightKey, isWrongKey, complete, start, setSpeed } from "../store/typeTrainerSlice";
import useKeyPress from '../features/useKeyPress';
import getCurrentTime from '../features/getTime';
import { ResultPopUp } from './Modal/Modal';

export const TypeTrainer = () => {
  const dispatch = useDispatch();
  const  { text, currentSymbol, startTime, outValues }  = useSelector((state) => state.typeTrainer);

  useEffect(() => {
    dispatch(fetchText());
  }, []);

  useEffect(() => {
    dispatch(setText(text));
  })

  const onKeyPress = (key) => {
    dispatch(start(getCurrentTime()));
        
    let isTyping = Boolean(startTime && outValues);
    if (isTyping) {
        dispatch(setSpeed(getCurrentTime()));
    };

    if (key === currentSymbol) {
      dispatch(isRightKey(key));

      let isFinished = Boolean(startTime);
      isFinished && dispatch(complete);
    } else {
      dispatch(isWrongKey(key));
    };
  }

  useKeyPress(onKeyPress);

  return (
    <div className={classess.page}>
      <TypingPlace  />
      <ResultPopUp />
    </div>
  )
}

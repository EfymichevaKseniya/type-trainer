import React, { useEffect } from 'react';
import { TypingPlace } from './TypingPlace/TypingPlace';
import classess from "./TypeTrainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setText, isRightKey, isWrongKey, complete, start, setSpeed } from "../store/typeTrainerSlice";
import useKeyPress from '../features/useKeyPress';
import getCurrentTime from '../features/getTime';
import { ResultPopUp } from './Modal/Modal';
import Start from './Start/Start';

export const TypeTrainer = () => {
  const dispatch = useDispatch();
  const  { text, currentSymbol, startTime, outValues }  = useSelector((state) => state.typeTrainer);

  useEffect(() => {
    dispatch(setText(text));
  })

  const onKeyPress = (key) => {
    dispatch(start(getCurrentTime()));

    let isFinished = Boolean(startTime && (text.length-1 === outValues.length));
      if (isFinished) {
        dispatch(complete());
      };

    let isTyping = Boolean(startTime && outValues);
    if (isTyping) {
        dispatch(setSpeed(getCurrentTime()));
    };

    if (key === currentSymbol) {
      dispatch(isRightKey(key));
    } else {
      dispatch(isWrongKey(key));
    };
  }

  useKeyPress(onKeyPress);

  return (
    <div className={classess.page}>
      <Start/>
      <TypingPlace />
      <ResultPopUp />
    </div>
  )
}

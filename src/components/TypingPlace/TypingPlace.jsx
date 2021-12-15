import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from '../Sidebar/Sidebar';
import { Button } from 'react-bootstrap';
import fetchText from "../../store/ActionCreatorTrainer";
import classes from './TypingPlace.module.css';
import { resetState, startTyping } from "../../store/typeTrainerSlice";

export const TypingPlace = () => {
  const dispatch = useDispatch();
  const  { text, isSymbolWrong, step, lang }  = useSelector((state) => state.typeTrainer);
  const handleClick = () => {
    dispatch(fetchText(lang));
    dispatch(resetState());
  }

  const handleClickRest = () => {
    dispatch(resetState());
    dispatch(startTyping());
  }

  return (
    <div className={classes.typingPlace}>
      <div className={classes.typingTextWrapper}>
        {Boolean(text.length) &&
          text.split('').map((item, index) =>
            <span key={item + index} className={
              [
                classes.typingText,
                `${step === index ? classes.key : '' }`,
                `${((step === index) && isSymbolWrong) ? classes.keyWrong : ''}`
              ]
              .join(' ')}>{item}</span>
          )
        }
      </div>
      <div className={classes.wrapper}>
        <Sidebar />
        <div className={classes.box__btn}>
          <Button className={'mr-2'} onClick={() => handleClick()}>
            Другой текст
          </Button>
          <Button onClick={() => handleClickRest()}>
            Заново
          </Button>
        </div>
      </div>
    </div>
  )
}

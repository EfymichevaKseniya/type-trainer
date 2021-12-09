import React from "react";
import { useSelector } from 'react-redux';
import { Sidebar } from "../Sidebar/Sidebar";
// import fetchText from "../../store/ActionCreatorTrainer";
import classes from './TypingPlace.module.css';

export const TypingPlace = () => {
  // const dispatch = useDispatch();
  const  { text, isSymbolWrong, step }  = useSelector((state) => state.typeTrainer);

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
      <Sidebar />
    </div>
  )
}

import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch ,useSelector } from "react-redux";
import classess from './Sidebar.module.css';
import { resetState } from "../../store/typeTrainerSlice";

export const Sidebar = () => {
  const { speed, accuracy } = useSelector((state) => state.typeTrainer);
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(resetState());
  }

  return (
    <section className={classess.sidebar}>
      <h2 className={classess.sidebarTitle}>
        Скорость
        <p className={classess.sidebarValues}>{speed} зн/мин</p>
      </h2>
      <h2 className={classess.sidebarTitle}>
        Точность
        <p className={classess.sidebarValues}>{accuracy}%</p>
      </h2>
      <Button size='lg' onClick={onHandleClick}>
        Заново
      </Button>
    </section>
  )
} 
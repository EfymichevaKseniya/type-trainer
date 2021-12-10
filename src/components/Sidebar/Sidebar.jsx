import React from "react";
import { useSelector } from "react-redux";
import classess from './Sidebar.module.css';

export const Sidebar = () => {
  const { speed, accuracy } = useSelector((state) => state.typeTrainer);

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
    </section>
  )
} 
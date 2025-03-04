import React from "react";
import s from "./User.module.scss";
import UserMan from '../../../assets/icon/user/user.svg'

export const User: React.FC = () => {
  return (
    <img src={UserMan} alt="User" className={s.userMan} />
  );
};

import React from "react";
import s from "./Logo.module.scss";
import Logotype from '../../shared/assets/icon/logo/logo.svg'

export const Logo: React.FC = () => {
  return <img src={Logotype} alt="Logo" className={s.logo} />;
};

import React from "react";
import styles from "./Logo.module.css";
import Logotype from '../../shared/assets/icon/logo/logo.svg'

export const Logo: React.FC = () => {
  return <img src={Logotype} alt="Logo" className={styles.logo} />;
};

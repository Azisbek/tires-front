import React from "react";
import styles from "./Icons.module.css";
import HeartIcon from "../../shared/assets/icon/icons/heart.svg";
import CartIcon from "../../shared/assets/icon/icons/cart.svg";

export const Icons: React.FC = () => {
  return (
    <div className={styles.icons}>
      <img src={HeartIcon} alt="Heart" />
      <img src={CartIcon} alt="Cart" />
    </div>
  );
};

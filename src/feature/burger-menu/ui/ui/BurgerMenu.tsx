import React, { useState } from "react";
import styles from "./BurgerMenu.module.css";
import { Link } from "react-router-dom";

export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
        <div className={styles.burgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Главная</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>Товары</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Услуги</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Компания</Link></li>
        </ul>
      </nav>
    </div>
  );
};

import { useState } from 'react';
import styles from './UserDropdown.module.css';

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        Личный кабинет 
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <a href="/profile">Профиль</a>
          <a href="/settings">Настройки</a>
          <a href="/logout">Выйти</a>
        </div>
      )}
    </div>
  );
};

export default UserDropdown
import { useState } from 'react';
import clsx from 'clsx';
import SearchIcon from '../../../shared/assets/icons/search/search.svg';
import CloseIcon from '../../../shared/assets/icons/search/close.svg';
import s from './Search.module.scss';

export function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => setIsOpen((prev) => !prev);

  return (
    <div className={s.searchContainer}>
      {!isOpen && (
        <button className={s.searchButton} onClick={toggleSearch}>
          <img className={s.icon} src={SearchIcon} alt="search" />
        </button>
      )}

      <div className={clsx(s.searchPanel, { [s.open]: isOpen })}>
        <input type="text" placeholder="Введите название товара или услуги" />
        <button className={s.searchSubmit}>Найти</button>
        <button className={s.closeButton} onClick={toggleSearch}>
          <img src={CloseIcon} alt="close" />
        </button>
      </div>
    </div>
  );
}

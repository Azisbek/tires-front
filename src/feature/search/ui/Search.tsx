// import React from "react";
// import SearchIcon from '../../../shared/assets/icon/search/search.svg'
// import styles from "./Search.module.css";

// export const Search: React.FC = () => {
//   return <img className={styles.icon} src={SearchIcon} alt="search" />
  
// };
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from '../../../shared/assets/icon/search/search.svg';
import styles from "./Search.module.css";

export const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <img 
        className={styles.icon} 
        src={SearchIcon} 
        alt="search" 
        onClick={toggleSearch} 
      />
      <div className={`${styles.searchForm} ${isOpen ? styles.open : ''}`}>
        <input 
          type="text" 
          placeholder="Поиск..." 
          className={styles.searchInput} 
        />
        <button className={styles.searchButton}>Найти</button>
      </div>
    </div>
  );
};
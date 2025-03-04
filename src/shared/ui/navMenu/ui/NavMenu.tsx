import React from "react";
import s from "./NavMenu.module.scss";


export const NavMenu: React.FC = () => {
  
  return (
    <nav className={s.menu}>
      <li>
        <button className={s.menuButton}>Товары </button>
      
      </li>
      <button  className={s.servicesButton}>
        Услуги 
      </button>
      
      <button className={s.company}>Компания</button>
    </nav>
  );
};

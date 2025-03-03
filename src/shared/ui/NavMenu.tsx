import React, { useState } from "react";
import styles from "./NavMenu.module.css";
import car from '../assets/icon/navMenu/car.svg'
import truck from '../assets/icon/navMenu/truck.svg'
import tractor from '../assets/icon/navMenu/tractor.svg'
import roadMachine from '../assets/icon/navMenu/roadMachine.svg'
import tire from '../assets/icon/navMenu/tire.svg'
import disk from '../assets/icon/navMenu/disk.svg'
import clock from '../assets/icon/navMenu/clock.svg'
import price from '../assets/icon/navMenu/price.svg'

export const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const toggleServices = () => {
      setIsOpen2(!isOpen2);
    };

  

 





  return (
    <nav className={styles.menu}>
      <li>
        <button onClick={toggleMenu} className={styles.menuButton}>Товары </button>
      {isOpen && (
        <div className={styles.menuContent}>
          <ul>
            <li className={styles.tiresItem}>
              <img src={car} alt="car"/>
              <div className={styles.tireInfo}>
                <a className={styles.descriptionTires} href="/car-tires">Автомобильные шины </a>
                <span className={styles.tireTypes}>Летние Зимние Шипованные Фрикционные Б/у</span>
                <span className={styles.tireSizes}>R13 R14 R15 R16 R17 R18 R19 R20</span>
              </div>
              
            </li>
            <hr />
            <li className={styles.tiresItem}>
              <img src={truck} alt="truck"/>
              <div className={styles.tireInfo}>
                <a className={styles.descriptionTires} href="/truck-tires">Грузовые шины </a>
                <span className={styles.tireTypes}>Ведущие Универсальные Рулевые Прицеп Рулевые+прицеп</span>
                <span className={styles.tireSizes}>R22,5 R24 R21 R20 R19,5</span>
              </div>
              
            </li>
            <hr />
            <li className={styles.tiresItem}>
              <img src={tractor} alt="tractor"/>
              <div className={styles.tireInfo}>
                <a className={styles.descriptionTires} href="/agricultural-tires">Сельскохозяйственные шины </a>
                <span className={styles.tireTypes}>Комбинированные Ведущие Рулевые</span>
                <span className={styles.tireSizes}>R34 R38 R32 R28 R22,5</span>
              </div>
              
            </li>
            <hr />
            <li className={styles.tiresItem}>
              <img src={roadMachine} alt="roadMachine"/>
              <div className={styles.tireInfo}>
                <a className={styles.descriptionTires} href="/road-construction-tires">Дорожно-строительные шины </a>
                <span className={styles.tireTypes}>Комбинированные Ведущие Рулевые</span>
                <span className={styles.tireSizes}>R34 R38 R32 R28 R22,5</span>
              </div>
              
            </li>
            <hr />
          </ul>

          <ul className={styles.accessoriesList}>
            <li><a href="/accessories">Аксессуары для шин, дисков и шиномонтажа</a></li>
            <hr />
            <li><a href="/batteries">Аккумуляторы</a></li>
            <hr />
            <li><a href="/oils">Автомасла</a></li>
            <hr />
            <li><a href="/electronics">Автоэлектроника</a></li>
            <hr />
            <li><a href="/chemicals">Автохимия и автокосметика</a></li>
            <hr />
            <li><a href="/decor">Внешний декор, тюнинг, зашита</a></li>
            <hr />
            <li><a href="/tools">Интсрументы и техническая помошь</a></li>
            <hr />
            <li><a href="/compressors">Копрессоры</a></li>
            <hr />
          </ul>
          
        </div>
      )}
      </li>
      <button onClick={toggleServices} className={styles.servicesButton}>
        Услуги 
      </button>
      {isOpen2 && (
        <div className={styles.servicesContent}>
          <ul>
            <li className={styles.servicesListLeft}>
              <img src={tire} alt="tire" />
              <div className={styles.servicesInfo}>
                <a className={styles.descriptionServices} href="/services">Шиномонтаж</a>
                <span className={styles.serviceTime}>
                  <img src={clock} alt="clock"/> 
                   Ежедневно с 9:00 до 21:00, без перерывов
                  </span>
                <span className={styles.servicePrice}>
                  <img src={price} alt="price"/>
                  от 500 ₽
                </span>
              </div>
            </li>
            <hr />
            <li className={styles.servicesListLeft}>
              <img src={disk} alt="disk" />
              <div className={styles.servicesInfo}>
                <a className={styles.descriptionServices} href="/services">Ремонт и правка дисков</a>
                <span className={styles.serviceTime}>
                  <img src={clock} alt="clock"/> 
                   Ежедневно с 9:00 до 21:00, без перерывов
                  </span>
                <span className={styles.servicePrice}>
                  <img src={price} alt="price"/>
                  от 500 ₽
                </span>
              </div>
            </li>
            <hr />
          </ul>
          <ul className={styles.servicesListRight}>
            <li> <a href="">Ошиповка зимних шин</a></li>
            <hr />
            <li> <a href="">Сезонное хранение шин</a></li>
            <hr />
            <li> <a href="">Сход развал</a></li>
            <hr />
          </ul>
        </div>
      )}
      <li><a href="/company">Компания </a></li>
    </nav>
  );
};

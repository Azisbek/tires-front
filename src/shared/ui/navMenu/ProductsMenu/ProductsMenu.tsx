import { useState } from "react";
import s from "./ProductsMenu.module.scss";
import car from "../../../assets/icons/navMenu/car.svg";
import truck from "../../../assets/icons/navMenu/truck.svg";
import tractor from "../../../assets/icons/navMenu/tractor.svg";
import roadMachine from "../../../assets/icons/navMenu/roadMachine.svg";

export function ProductsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleMenu} className={s.menuButton}>Товары</button>
      {isOpen && (
        <div className={s.menuContent}>
          <ul>
            <li className={s.tiresItem}>
              <img src={car} alt="car" />
              <div className={s.tireInfo}>
                <a className={s.descriptionTires} href="/car-tires">Автомобильные шины</a>
                <span className={s.tireTypes}>Летние Зимние Шипованные Фрикционные Б/у</span>
                <span className={s.tireSizes}>R13 R14 R15 R16 R17 R18 R19 R20</span>
              </div>
            </li>
            <hr />
            <li className={s.tiresItem}>
              <img src={truck} alt="truck" />
              <div className={s.tireInfo}>
                <a className={s.descriptionTires} href="/truck-tires">Грузовые шины</a>
                <span className={s.tireTypes}>Ведущие Универсальные Рулевые Прицеп Рулевые+прицеп</span>
                <span className={s.tireSizes}>R22,5 R24 R21 R20 R19,5</span>
              </div>
            </li>
            <hr />
            <li className={s.tiresItem}>
              <img src={tractor} alt="tractor" />
              <div className={s.tireInfo}>
                <a className={s.descriptionTires} href="/agricultural-tires">Сельскохозяйственные шины</a>
                <span className={s.tireTypes}>Комбинированные Ведущие Рулевые</span>
                <span className={s.tireSizes}>R34 R38 R32 R28 R22,5</span>
              </div>
            </li>
            <hr />
            <li className={s.tiresItem}>
              <img src={roadMachine} alt="roadMachine" />
              <div className={s.tireInfo}>
                <a className={s.descriptionTires} href="/road-construction-tires">Дорожно-строительные шины</a>
                <span className={s.tireTypes}>Комбинированные Ведущие Рулевые</span>
                <span className={s.tireSizes}>R34 R38 R32 R28 R22,5</span>
              </div>
            </li>
            <hr />
          </ul>

          <ul className={s.accessoriesList}>
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
            <li><a href="/decor">Внешний декор, тюнинг, защита</a></li>
            <hr />
            <li><a href="/tools">Инструменты и техническая помощь</a></li>
            <hr />
            <li><a href="/compressors">Компрессоры</a></li>
            <hr />
          </ul>
        </div>
      )}
    </div>
  );
}

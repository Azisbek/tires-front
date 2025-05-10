import { useState } from "react";
import s from "./ServicesList.module.scss";
import tire from "../../../assets/icons/navMenu/tire.svg";
import disk from "../../../assets/icons/navMenu/disk.svg";
import clock from "../../../assets/icons/navMenu/clock.svg";
import price from "../../../assets/icons/navMenu/price.svg";

export function ServicesList() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleServices = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleServices} className={s.servicesButton}>
        Услуги
      </button>
      {isOpen && (
        <div className={s.servicesContent}>
          <ul>
            <li className={s.servicesListLeft}>
              <img src={tire} alt="tire" />
              <div className={s.servicesInfo}>
                <a className={s.descriptionServices} href="/services">
                  Шиномонтаж
                </a>
                <span className={s.serviceTime}>
                  <img src={clock} alt="clock" />
                  Ежедневно с 9:00 до 21:00, без перерывов
                </span>
                <span className={s.servicePrice}>
                  <img src={price} alt="price" /> 
                  от 500 ₽
                </span>
              </div>
            </li>
            <hr />
            <li className={s.servicesListLeft}>
              <img src={disk} alt="disk" />
              <div className={s.servicesInfo}>
                <a className={s.descriptionServices} href="/services">
                  Ремонт и правка дисков
                </a>
                <span className={s.serviceTime}>
                  <img src={clock} alt="clock" />
                  Ежедневно с 9:00 до 21:00, без перерывов
                </span>
                <span className={s.servicePrice}>
                  <img src={price} alt="price" />
                  от 500 ₽
                </span>
              </div>
            </li>
            <hr />
          </ul>
          <ul className={s.servicesListRight}>
            <li>
              <a href="">Ошиповка зимних шин</a>
            </li>
            <hr />
            <li>
              <a href="">Сезонное хранение шин</a>
            </li>
            <hr />
            <li>
              <a href="">Сход развал</a>
            </li>
            <hr />
          </ul>
        </div>
      )}
    </div>
  );
}
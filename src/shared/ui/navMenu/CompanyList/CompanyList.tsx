import { useState } from "react";
import s from "./CompanyList.module.scss";


export function CompanyList() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCompany = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleCompany} className={s.companyListButton}>
        Компания
      </button>
      {isOpen && (
        <div className={s.companyListContent}>
          <ul className={s.companyListLeft}>
          <li>
              <a href="">О компании</a>
            </li>
            <hr />
            <li>
              <a href="">Контакты</a>
            </li>
            <hr />
            <li>
              <a href="">Статьи и новости</a>
            </li>
            <hr />
            <li>
              <a href="">Акции и скидки</a>
            </li>
            <hr />
            <li>
              <a href="">Доставка</a>
            </li>
            <hr />
            <li>
              <a href="">Опотвым клиентам</a>
            </li>
            <hr />
          </ul>
          <ul className={s.companyListRight}>
            <li>
              <a href="">Оплата</a>
            </li>
            <hr />
            <li>
              <a href="">Кредит</a>
            </li>
            <hr />
            <li>
              <a href="">Гарантия</a>
            </li>
            <hr />
            <li>
              <a href="">Возврат товара</a>
            </li>
            <hr />
            <li>
              <a href="">Подарочные сертификаты</a>
            </li>
            <hr />
          </ul>
        </div>
      )}
    </div>
  );
}
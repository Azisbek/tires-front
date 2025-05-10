import { useState } from "react";
import s from "./PersonalAccount.module.scss";

export function PersonalAccount() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePersonal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={togglePersonal} className={s.personalAccountButton}>
        Личный кабинет
      </button>
      {isOpen && (
        <div className={s.container}>
          <div className={s.section}>
            <label className={s.sectionTitle}>Вход</label>
            <div className={s.inputGroup}>
              <input type="text" placeholder="Ваш телефон" className={s.input} />
              <button className={s.button}>Получить код</button>
            </div>
          </div>
          <div className={s.section}>
            <label className={s.sectionTitle}>Регистрация</label>
            <div className={s.inputGroup}>
              <input type="text" placeholder="Ваш телефон" className={s.input} />
              <button className={s.button}>Получить код</button>
            </div>
            <div className={s.checkboxContainer}>
              <input type="checkbox" id="agree" className={s.checkbox} />
              <label htmlFor="agree" className={s.checkboxLabel}>
                Я подтверждаю свою дееспособность, даю согласие на получение информации о статусе заказов и на обработку <a href="#" className={s.link}>персональных данных</a>.
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
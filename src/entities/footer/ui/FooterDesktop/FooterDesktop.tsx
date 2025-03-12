import footerLogo from '../../../../shared/assets/icons/footer-logo.png'
import instaIcon from '../../../../shared/assets/icons/insta-icon.png'
import vkIcon from '../../../../shared/assets/icons/vk-icon.png'
import whatsappIcon from '../../../../shared/assets/icons/whatsapp-icon.png'

import s from './FooterDesktop.module.scss'

export const FooterDesktop = () => {
  return (
    <footer className={s.footer}>
      <div className={s.logoContainer}>
        <img
          src={footerLogo}
          alt="Footer Logo"
          className={s.logoImg}
        />
      </div>

      <div className={s.footerContainer}>
        <div className={s.footerColumn}>
          <h3 className={s.footerTitle}>Товары</h3>
          <ul>
            <li>Автомобильные шины</li>
            <li>Автомобильные диски</li>
            <li>
              Аксессуары для шин, <br /> дисков и шиномонтажа
            </li>
            <li>Аккумуляторы</li>
            <li>Автомасла</li>
            <li>Автозапчасти</li>
            <li>Автоэлектроника</li>
            <li>
              Автохимия <br />и автокосметика
            </li>
            <li>
              Внешний декор, тюнинг, <br /> защита
            </li>
            <li>
              Инструменты <br />и техническая помощь
            </li>
            <li>Компрессоры</li>
          </ul>
        </div>

        <div className={s.footerColumn}>
          <h3 className={s.footerTitle}>Услуги</h3>
          <ul>
            <li>Шиномонтаж</li>
            <li>Всё для шиномонтажа</li>
            <li>Ремонт и правка дисков</li>
            <li>Ошиповка зимних шин</li>
            <li>Сезонное хранение</li>
            <li>Ремонт шин</li>
            <li>Сход-развал</li>
            <li>Мелкосрочный ремонт</li>
          </ul>
        </div>

        <div className={s.footerCenter}>
          <div className={s.phone}>9960000000</div>
          <p className={s.phoneTitle}>Звонок бесплатный</p>
          <button className={s.callButton}>Заказать обратный звонок</button>
          <p className={s.socialsTitle}>Мы в социальных сетях</p>
          <div className={s.socials}>
            <div className={s.iconContainer}>
              <img
                src={instaIcon}
                alt="Instagram"
              />
            </div>
            <div className={s.iconContainer}>
              <img
                src={vkIcon}
                alt="VK"
              />
            </div>
            <div className={s.iconContainer}>
              <img
                src={whatsappIcon}
                alt="WhatsApp"
              />
            </div>
          </div>
        </div>

        <div className={s.footerColumn}>
          <h3 className={s.footerTitle}>Компания</h3>
          <ul>
            <li>О компании</li>
            <li>Оплата</li>
            <li>Доставка</li>
            <li>Статьи и новости</li>
            <li>Акции и скидки</li>
            <li>Контакты</li>
            <li>Кредит</li>
            <li>Гарантия</li>
            <li>Подарочные сертификаты</li>
            <li>Оптовым клиентам</li>
            <li>Возврат товара</li>
          </ul>
        </div>

        <div className={s.footerColumn}>
          <h3 className={s.footerTitle}>Личный кабинет</h3>
          <ul>
            <li>Корзина</li>
            <li>Баллы</li>
            <li>Гараж</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

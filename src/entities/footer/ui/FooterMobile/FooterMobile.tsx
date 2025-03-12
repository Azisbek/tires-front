import footerLogo from '../../../../shared/assets/icons/footer-logo.png'
import instaIcon from '../../../../shared/assets/icons/insta-icon.png'
import vkIcon from '../../../../shared/assets/icons/vk-icon.png'
import whatsappIcon from '../../../../shared/assets/icons/whatsapp-icon.png'

import s from './FooterMobile.module.scss'

export const FooterMobile = () => {
  return (
    <footer className={s.footer}>
      <div className={s.logoContainer}>
        <img
          src={footerLogo}
          alt="footerLogo"
        />
      </div>
      <p className={s.phone}>996000000000</p>
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
    </footer>
  )
}

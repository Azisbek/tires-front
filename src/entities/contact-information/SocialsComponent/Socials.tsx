import TwitterIcon from 'shared/assets/icons/socialIcon/TwitterIcon.svg'
import InstagramIcon from 'shared/assets/icons/socialIcon/instaIcon.svg'
import WhatsAppIcon from 'shared/assets/icons/socialIcon/whatsAppIcon.svg'

import s from './Socials.module.scss'

export function Socials() {
  return (
    <div className={s.socials}>
      <a href="#">
        <img
          src={InstagramIcon}
          alt="Instagram"
        />
      </a>
      <a href="#">
        <img
          src={TwitterIcon}
          alt="Twitter"
        />
      </a>
      <a href="#">
        <img
          src={WhatsAppIcon}
          alt="WhatsApp"
        />
      </a>
    </div>
  )
}

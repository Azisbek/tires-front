import TwitterIcon from '/src/shared/assets/icons/socialIcon/TwitterIcon.svg'
import InstagramIcon from '/src/shared/assets/icons/socialIcon/instaIcon.svg'
import WhatsAppIcon from '/src/shared/assets/icons/socialIcon/whatsAppIcon.svg'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Text, Title } from 'shared/ui/Text'

import s from './FooterContact.module.scss'

export const FooterContact = () => (
  <div className={s.footerContact}> <Title size="md-24" color="black" > 9960000000</Title>

    <Text size="md-16" type="regular" color="gray" > Звонок бесплатный </Text>

    <AppButton variant="border" className={s.btn} >Заказать обратный звонок</AppButton>

    <Text size="md-16" type="regular" color="gray" > Мы в социальных сетях </Text>

    <div className={s.socials}>
      <a href="#"><img src={InstagramIcon} alt="Instagram icon"/></a>
      <a href="#"><img src={TwitterIcon} alt="Twitter icon"/></a>
      <a href="#"><img src={WhatsAppIcon} alt="WhatsApp icon"/></a>
    </div>
  </div>
)

import { AppButton } from "shared/ui/AppButton/AppButton";
import s from "./FooterContact.module.scss";
import InstagramIcon from "/src/shared/assets/icons/socialIcon/instaIcon.svg";
import TwitterIcon from "/src/shared/assets/icons/socialIcon/TwitterIcon.svg";
import WhatsAppIcon from "/src/shared/assets/icons/socialIcon/whatsAppIcon.svg";
import { Text, Title } from "shared/ui/Text";

export const FooterContact = () => (
  <div className={s.footerCenter}>
    <Title size="md-24" className={s.phone}>9960000000</Title>
    <Text size="md-16" type="regular" color="gray">
      Звонок бесплатный
    </Text>

    <AppButton variant="border" className={s.callButton}>Заказать обратный звонок</AppButton>

    <Text size="md-16" type="regular" color="gray" >Мы в социальных сетях </Text>
    <div className={s.socials}>
      <a href="#" title="Instagram">
        <img src={InstagramIcon} alt="Instagram icon" />
      </a>
      <a href="#" title="Twitter">
        <img src={TwitterIcon} alt="Twitter icon" />
      </a>
      <a href="#" title="WhatsApp">
        <img src={WhatsAppIcon} alt="WhatsApp icon" />
      </a>
    </div>
  </div>
);

import {
  FooterAccount,
  FooterCompany,
  FooterContact,
  FooterProduct,
  FooterServices,
} from 'entities/footerComponents'

import s from './Footer.module.scss'
import clsx from "clsx";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={clsx(s.container, s.footerContent)}>

        <FooterProduct />
        <FooterServices />

        <FooterContact />

        <FooterCompany />
        <FooterAccount />

      </div>
    </footer>
  )
}

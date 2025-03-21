import {
  FooterAccount,
  FooterCompany,
  FooterContact,
  FooterProduct,
  FooterServices,
} from 'entities/footerComponents'

import s from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>

        <FooterProduct />
        <FooterServices />

        <FooterContact />

        <FooterCompany />
        <FooterAccount />

      </div>
    </footer>
  )
}

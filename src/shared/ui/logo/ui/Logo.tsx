import Logotype from '../../../assets/icon/logo/logo.svg'

import s from './Logo.module.scss'

export function Logo() {
  return (
    <img
      src={Logotype}
      alt="Logo"
      className={s.logo}
    />
  )
}

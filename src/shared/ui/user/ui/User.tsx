import UserMan from '../../../assets/icon/user/user.svg'

import s from './User.module.scss'

export function User() {
  return (
    <img
      src={UserMan}
      alt="User"
      className={s.userMan}
    />
  )
}

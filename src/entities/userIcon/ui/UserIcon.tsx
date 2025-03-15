import UserMan from '../../../shared/assets/icons/userIcon/user.svg'
import s from './UserIcon.module.scss'

export function UserIcon() {
  return (
    <img
      src={UserMan}
      alt="User"
      className={s.userMan}
    />
  )
}

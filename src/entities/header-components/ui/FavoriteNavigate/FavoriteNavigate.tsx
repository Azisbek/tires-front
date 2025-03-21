import clsx from 'clsx'

import { LikeIcon } from 'shared/assets/icons/LikeIcon/LikeIcon'

import s from './FavoriteNavigate.module.scss'

interface Props {
  className?: string
  to?: string
}

export function FavoriteNavigate({ className, to = '' }: Props) {
  return (
    <button className={clsx(s.btn, className)}>
      <a href={to}>
        <LikeIcon variant="white" />
      </a>
    </button>
  )
}

import clsx from 'clsx'

import arrowBottomIcon from 'shared/assets/icons/arrows-icon/arrowBottomWhite.webp'
import arrowTopIcon from 'shared/assets/icons/arrows-icon/arrowTopOrange.webp'

import s from './MenuButton.module.scss'

interface Props {
  title: string
  to?: string
  value?: boolean
  onMouseEnter?: (value: boolean) => void
  onMouseLeave?: (value: boolean) => void
}

export function MenuButton({
  title,
  to,
  value,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  return (
    <button
      onMouseEnter={() => onMouseEnter?.(true)}
      onMouseLeave={() => onMouseLeave?.(false)}
      className={clsx(s.menuButton, value && s.active)}
    >
      <a
        href={to}
        className={s.link}
      >
        {title}
      </a>

      <img
        className={s.image}
        src={value ? arrowTopIcon : arrowBottomIcon}
        alt="arrow"
      />
    </button>
  )
}

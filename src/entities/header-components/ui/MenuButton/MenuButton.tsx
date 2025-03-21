import clsx from 'clsx'

import arrowBottomIcon from 'shared/assets/icons/arrows-icon/arrowBottomWhite.webp'
import arrowTopIcon from 'shared/assets/icons/arrows-icon/arrowTopOrange.webp'

import s from './MenuButton.module.scss'

interface Props {
  title: string
  to?: string
  value?: boolean
  onClick?: (value: boolean) => void
}

export function MenuButton({ title, to, value, onClick }: Props) {
  return (
    <button
      onClick={() => onClick?.(!value)}
      className={clsx(s.menuButton, value && s.active)}
    >
      {value ? (
        <a
          href={to}
          className={s.link}
        >
          {title}
        </a>
      ) : (
        title
      )}

      <img
        className={s.image}
        src={value ? arrowTopIcon : arrowBottomIcon}
        alt="arrow"
      />
    </button>
  )
}

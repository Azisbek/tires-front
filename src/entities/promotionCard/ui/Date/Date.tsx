import clsx from 'clsx'

import time from '/src/shared/assets/icons/Icon_time.svg'

import s from './Date.module.scss'

interface Props {
  className?: string
  date: string
  expiryDate?: boolean
}

export function Date({ className, date, expiryDate }: Props) {
  return (
    <div className={clsx(s.container, className)}>
      <img
        src={time}
        alt="time"
      />
      {expiryDate ? (
        <>
          <span>Действует до:</span> <span className={s.title}>{date}</span>
        </>
      ) : (
        <div>{date}</div>
      )}
    </div>
  )
}

import time from '../../../../shared/assets/icons/Icon_time.svg'
import s from './Date.module.scss'

interface Props {
  className?: string
  date: string
  boolean?: boolean
}

export function Date({ className, date, boolean }: Props) {
  return (
    <div className={s.container}>
      <img src={time} alt="time" />
      {boolean ? (
        <>
          <span>Действует до:</span> <span className={s.title}>{date}</span>
        </>
      ) : (
        <div className={className}>{date}</div>
      )}
    </div>
  )
}

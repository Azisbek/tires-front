import clsx from 'clsx'

import { useNavigate } from 'react-router-dom'

import s from './Empty.module.scss'

interface Props {
  to?: string
  className?: string
  title: string
  description?: string
}

export function Empty({ to, className, title, description }: Props) {
  const navigate = useNavigate()

  return (
    <div
      className={clsx(s.empty, className)}
      onClick={() => to && navigate(to)}
    >
      <div className={s.inner}>
        <h2 className={s.title}>{title}</h2>
        {description && <p className={s.description}>{description}</p>}
      </div>
    </div>
  )
}

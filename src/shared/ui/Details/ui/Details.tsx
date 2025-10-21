import { ReactNode, useState } from 'react'

import s from './Details.module.scss'

interface Props {
  number: number
  title: string
  children?: ReactNode
}

export function Details({ number, title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={s.details}>
      <p
        className={s.title}
        onClick={handleClick}
      >
        <span className={isOpen ? s.active : ''}>{number}.</span>

        {title}
      </p>

      {isOpen && <div className={s.content}>{children}</div>}
    </div>
  )
}

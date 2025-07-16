import clsx from 'clsx'

import { useEffect } from 'react'

import s from './PopupLayout.module.scss'

interface Props {
  className?: string
  children: React.ReactNode
  onClick: () => void
}

export function PopupLayout({ children, className, onClick }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className={clsx(s.popup, className)}>
      <div className={s.content}>
        <button
          className={s.btnClose}
          onClick={onClick}
        >
          <img
            src="src/shared/assets/icons/accent_close.webp"
            alt="close"
            width={16}
            height={16}
          />
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
}

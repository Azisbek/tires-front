import clsx from 'clsx'

import { ReactNode } from 'react'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './Modal.module.scss'

interface ModalProps {
  children: ReactNode
  className?: string
  isOpen: boolean
  onClick: (isOpen: boolean) => void
  variant: 'opacity' | 'white'
}
export function Modal({
  children,
  variant,
  isOpen,
  onClick,
  className,
}: ModalProps) {
  return (
    <div className={s.container}>
      {isOpen && (
        <div
          className={clsx(s[variant], s.overlay)}
          onClick={() => onClick(false)}
        >
          <div
            className={`${s.modal} ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={s.modalContent}>
              <AppButton
                className={`${s.closeButton} ${s.modalButton}`}
                variant="accent"
                onClick={() => onClick(false)}
              >
                <div className={s.closeСross}></div>
              </AppButton>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

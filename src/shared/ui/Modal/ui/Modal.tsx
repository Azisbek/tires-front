import clsx from 'clsx'

import { ReactNode, useState } from 'react'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './Modal.module.scss'

interface ModalProps {
  children: ReactNode
  openText: string
  variant: 'opacity' | 'white'
}
export function Modal({ children, variant, openText }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.container}>
      <AppButton
        className={s.modalButton}
        variant="border"
        onClick={() => setIsOpen(true)}
      >
        {openText}
      </AppButton>

      {isOpen && (
        <div className={clsx(s[variant], s.overlay)}>
          <div className={s.modal}>
            <div className={s.modalContent}>
              <AppButton
                className={s.modalButton}
                variant="border"
                onClick={() => setIsOpen(false)}
              >
                Закрыть
              </AppButton>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

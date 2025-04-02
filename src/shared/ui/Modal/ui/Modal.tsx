import s from './Modal.module.scss'

interface Props {
  isOpen: boolean
  onClose?: (value: boolean) => void
  children: React.ReactNode
}

export function Modal({ isOpen = false, onClose, children }: Props) {
  if (!isOpen) return null

  return (
    <div
      className={s.modal}
      onClick={() => onClose}
    >
      <div
        className={s.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={s.close}
          onClick={() => onClose?.(false)}
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  )
}

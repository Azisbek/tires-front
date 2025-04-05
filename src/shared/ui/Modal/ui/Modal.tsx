import s from './Modal.module.scss'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, children, className }: Props) {
  if (!isOpen) return null

  return (
    <div
      className={s.modal}
      onClick={onClose}
    >
      <div
        className={`${s.modalContent} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={s.close}
          onClick={onClose}
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  )
}

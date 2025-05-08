import clsx from 'clsx'

import s from './Accordion.module.scss'

interface AccordionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

export const AccordionSection = ({
  title,
  isOpen,
  onToggle,
  children,
}: AccordionProps) => {
  return (
    <>
      <button
        onClick={onToggle}
        className={clsx(s.accordion, isOpen && s.open)}
        type="button"
      >
        {title}
      </button>
      <div
        className={s.panel}
        style={{
          maxHeight: isOpen ? '500px' : '0',
        }}
      >
        {children}
      </div>
    </>
  )
}

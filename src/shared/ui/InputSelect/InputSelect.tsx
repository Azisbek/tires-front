import { useEffect, useRef, useState } from 'react'

import arrowBottomIcon from 'shared/assets/icons/ArrowBottom.svg'
import arrowTopIcon from 'shared/assets/icons/ArrowTop.svg'

import s from './InputSelect.module.scss'

interface Props {
  options: string[]
  onChange?: (value: string) => void
  defaultValue?: string
  color: 'grey' | 'white'
}

export function InputSelect({ options, onChange, defaultValue, color }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(defaultValue || 'default')

  const selectRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => setIsOpen((prev: boolean) => !prev)

  const setValueChange = (value: string) => {
    setValue(value)
    onChange && onChange(value)
    toggleOpen()
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside) // Используем mousedown, чтобы быстрее закрыть
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside) // Очищаем при размонтировании
    }
  }, [isOpen])

  return (
    <div
      ref={selectRef}
      className={s.select}
    >
      <div
        onClick={toggleOpen}
        className={
          isOpen ? `${s.inputActive}` : `${s.input} ${s[color]}`
        }
      >
        <p className={s.defaultTitle}>{value}</p>
        <img
          src={isOpen ? arrowTopIcon : arrowBottomIcon}
          alt={isOpen ? arrowTopIcon : arrowBottomIcon}
        />
      </div>

      {isOpen && (
        <ul className={s.options}>
          {options.map((option, index) => (
            <li
              key={index}
              className={s.option}
              onClick={() => setValueChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'

import s from './InputSelect.module.scss'

interface Props {
  options: string[]
  onChange?: (value: string) => void
  defaulValue?: string
}

export function InputSelect({ options, onChange, defaulValue }: Props) {
  const [isOpen, setISOpen] = useState(false)
  const [value, setValue] = useState(defaulValue || 'default')

  const selectRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => setISOpen((prev: boolean) => !prev)

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
      setISOpen(false)
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
        className={isOpen ? s.inputActive : s.input}
      >
        <p className={s.defaultTitle}>{value}</p>
        <img
          src={`src/shared/assets/icons/${isOpen ? 'ArrowTop' : 'ArrowBottom'}.svg`}
          alt="src/shared/assets/icons/ArrowBottom.svg"
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

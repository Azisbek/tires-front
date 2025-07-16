import clsx from 'clsx'

import { useRef, useState } from 'react'

import arrowBottomIcon from 'shared/assets/icons/ArrowBottom.svg'
import arrowTopIcon from 'shared/assets/icons/ArrowTop.svg'
import { useClickOutside } from 'shared/hooks/useClickOutside'

import s from './InputSelect.module.scss'

export interface SelectOption {
  label: string
  value: string | number
}

type OptionType = string | SelectOption

interface Props {
  options: OptionType[] | undefined
  onChange?: (value: string | number) => void
  defaultValue?: string
  color: 'grey' | 'white' | 'darkGrey'
  className?: string
}

export function InputSelect({
  options,
  onChange,
  defaultValue,
  color,
  className,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState(() => {
    const initial = options?.find((opt) =>
      typeof opt === 'string'
        ? opt === defaultValue
        : opt.value === defaultValue,
    )
    return typeof initial === 'string' ? initial : initial?.label || ''
  })

  const selectRef = useRef<HTMLDivElement>(null)
  useClickOutside(selectRef, () => setIsOpen(false), isOpen)

  const toggleOpen = () => setIsOpen((prev) => !prev)

  const handleSelect = (option: OptionType) => {
    const label = typeof option === 'string' ? option : option.label
    const value = typeof option === 'string' ? option : option.value

    setSelectedLabel(label)
    onChange?.(value)
    setIsOpen(false)
  }

  return (
    <div
      ref={selectRef}
      className={clsx(s.select, className)}
    >
      <div
        onClick={toggleOpen}
        className={
          isOpen ? `${s.inputActive} ${s[color]}` : `${s.input} ${s[color]}`
        }
      >
        <p className={s.defaultTitle}>{selectedLabel || 'Выберите'}</p>
        <img
          src={isOpen ? arrowTopIcon : arrowBottomIcon}
          alt="arrow"
        />
      </div>

      {isOpen && (
        <ul className={s.options}>
          {options?.map((option, index) => {
            const label = typeof option === 'string' ? option : option.label
            return (
              <li
                key={index}
                className={s.option}
                onClick={() => handleSelect(option)}
              >
                {label}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

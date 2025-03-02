import s from './InputSelect.module.scss'

interface Props {
  options: string[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export function InputSelect({ options, value, onChange, placeholder }: Props) {
  return (
    <select
      className={s.select}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option
        disabled
        value=""
      >
        {placeholder}
      </option>
      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  )
}

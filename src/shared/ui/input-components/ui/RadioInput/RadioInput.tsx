import s from './RadioInput.module.scss'

interface CustomRadioInputProps {
  value: string
  name: string
  selectedValue: string
  onChange: (value: string) => void
}

export function RadioInput({
  value,
  name,
  selectedValue,
  onChange,
}: CustomRadioInputProps) {
  return (
    <label className={s.radioLabel}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
        className={s.radioInput}
      />
      <span
        className={`${s.radioCircle} ${selectedValue === value ? s.checked : ''}`}
      ></span>
      <span className={s.radioLabelText}>{value}</span>
    </label>
  )
}

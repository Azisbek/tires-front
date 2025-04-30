import s from './Checkbox.module.scss'

interface Props {
  label: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Checkbox({ label, checked, onChange }: Props) {
  return (
    <label className={s.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  )
}

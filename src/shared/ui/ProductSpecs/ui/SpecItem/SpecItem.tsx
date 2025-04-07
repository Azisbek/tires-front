import s from './SpecItem.module.scss'

interface Props {
  label: string
  value: string
  color: string
}

export function SpecItem({ label, value, color }: Props) {
  return (
    <div className={s.specItem}>
      <span className={color === 'dark' ? s.label : s.labelWhite}>{label}</span>
      <span className={color === 'dark' ? s.value : s.valueWhite}>{value}</span>
    </div>
  )
}

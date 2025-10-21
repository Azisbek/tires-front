import s from './SpecItem.module.scss'

interface Props {
  label: string
  value: string
  color: 'dark' | 'white'
  labelSize?: number
  valueSize?: number
}

export function SpecItem({ label, value, color, labelSize, valueSize }: Props) {
  return (
    <div className={s.specItem}>
      <span
        className={color === 'dark' ? s.label : s.labelWhite}
        style={{ fontSize: labelSize }}
      >
        {label}
      </span>
      <span
        className={color === 'dark' ? s.value : s.valueWhite}
        style={{ fontSize: valueSize }}
      >
        {value}
      </span>
    </div>
  )
}

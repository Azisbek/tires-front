import s from './ProductSpecs.module.scss'

interface Spec {
  label: string
  value: string | number
}

interface Props {
  specs: Spec[]
  color: 'white' | 'dark'
}

export function ProductSpecs({ specs, color }: Props) {
  return (
    <div className={s.productSpecs}>
      {specs.map((spec, index) => (
        <div
          key={index}
          className={s.specItem}
        >
          <span className={color === 'dark' ? s.label : s.labelWhite}>
            {spec.label}
          </span>
          <span className={color === 'dark' ? s.value : s.valueWhite}>
            {spec.value}
          </span>
        </div>
      ))}
    </div>
  )
}

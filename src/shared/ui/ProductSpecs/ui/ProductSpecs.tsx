import s from './ProductSpecs.module.scss'

interface Spec {
  label: string
  value: string | number
}

interface Props {
  specs: Spec[]
}

export function ProductSpecs({ specs }: Props) {
  return (
    <div className={s.productSpecs}>
      {specs.map((spec, index) => (
        <div
          key={index}
          className={s.specItem}
        >
          <span className={s.label}>{spec.label}</span>
          <span className={s.value}>{spec.value}</span>
        </div>
      ))}
    </div>
  )
}

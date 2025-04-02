import s from './Loader.module.scss'

interface Props {
  size?: number
}

export function Loader({ size = 50 }: Props) {
  return (
    <div
      className={s.loader}
      style={{ width: size, height: size }}
    ></div>
  )
}

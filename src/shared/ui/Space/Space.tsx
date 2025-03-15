import s from './Space.module.scss'

interface SpaceProps {
  w?: number
  h?: number
}

export function Space({ w = 0, h = 0 }: SpaceProps) {
  return (
    <div
      style={{ marginRight: `${w}px`, marginBottom: `${h}px` }}
      className={s.space}
    />
  )
}

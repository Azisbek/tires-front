import clsx from 'clsx'

import s from './Skeleton.module.scss'

interface Props {
  type?: 'text' | 'title' | 'avatar' | 'image'
  height?: number
  className?: string
}

export function Skeleton({ type = 'text', height = 20, className }: Props) {
  const typeClass = {
    text: s.text,
    title: s.title,
    avatar: s.avatar,
    image: s.image,
  }

  return (
    <div
      className={clsx(s.skeleton, typeClass[type], className)}
      style={{ height: `${height}px` }}
    ></div>
  )
}

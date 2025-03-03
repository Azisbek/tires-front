import clsx from 'clsx'

import { useEffect } from 'react'

import s from './SliderBanner.module.scss'

interface Props {
  className?: string
  images?: string[]
  currentPoint?: number
  onPointClick: (value: any) => void
  delay: number
}

export function SliderBanner({
  className,
  images = [],
  currentPoint = 1,
  onPointClick,
  delay = 1000,
}: Props) {
  useEffect(() => {
    const interval = setInterval(() => {
      onPointClick((prev: number) => (prev + 1) % images.length)
    }, delay)

    return () => clearInterval(interval)
  }, [onPointClick, images.length])

  return (
    <div className={clsx(s.pointContainer, className)}>
      {images?.map((_, index) => (
        <div
          key={index}
          className={clsx(currentPoint === index ? s.active : s.point)}
          onClick={() => onPointClick(index)}
        ></div>
      ))}
    </div>
  )
}

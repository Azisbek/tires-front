import clsx from 'clsx'

import { useEffect } from 'react'

import s from './SliderBanner.module.scss'

interface Props {
  className?: string
  images?: string[]
  currentPoint?: number
  onPointClick: (value: number | ((prev: number) => number)) => void
  interval: number
}

export function SliderBanner({
  className,
  images = [],
  currentPoint = 0,
  onPointClick,
  interval,
}: Props) {
  useEffect(() => {
    if (images.length === 0) return

    const intervalPoint = setInterval(() => {
      onPointClick((prev: number) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(intervalPoint)
  }, [onPointClick, images.length, interval])

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

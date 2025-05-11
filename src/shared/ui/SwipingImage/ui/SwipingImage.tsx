import clsx from 'clsx'

import { useEffect, useState } from 'react'

import { Skeleton } from 'shared/ui/skeleton-components'

import s from './SwipingImage.module.scss'

interface Props {
  className?: string
  delay?: number
  height?: number | string
  width?: number | string
  images: string[]
}

export function SwipingImage({
  className,
  delay = 3000,
  width = 100,
  height = 100,
  images,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0
        }
        return prevIndex + 1
      })
    }, delay)

    return () => clearInterval(interval)
  }, [images.length, delay])

  return (
    <div
      className={clsx(s.swipingImage, className)}
      style={{ width, height }}
    >
      {images[currentIndex] === null ? (
        <Skeleton
          type="image"
          height={241}
        />
      ) : (
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          loading="lazy"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            objectFit: 'cover',
          }}
        />
      )}
    </div>
  )
}

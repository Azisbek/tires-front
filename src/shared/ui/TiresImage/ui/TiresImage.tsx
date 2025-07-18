import clsx from 'clsx'

import allSeasonIcon from 'shared/assets/icons/season/allSeason.webp'
import summerIcon from 'shared/assets/icons/season/brightness.webp'
import winterIcon from 'shared/assets/icons/season/snow.webp'
import { Season } from 'shared/types/ProductDetailsTypes'
import { SwipingImage } from 'shared/ui/SwipingImage/ui/SwipingImage'

import s from './TiresImage.module.scss'

interface Props {
  className?: string
  images: string[]
  season: Season
}

export function TiresImage({ images, className, season }: Props) {
  const seasonIcons: Record<Season, string | null> = {
    summer: summerIcon,
    winter: winterIcon,
    all_seasons: allSeasonIcon,
  }

  const variant = season ? seasonIcons[season] : null

  return (
    <div className={clsx(s.imageContainer, className)}>
      <SwipingImage
        width={390}
        height={390}
        delay={5000}
        images={images}
      />

      <img
        className={s.seasonIcon}
        src={variant || undefined}
        alt="season"
      />
    </div>
  )
}

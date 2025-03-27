import clsx from 'clsx'

import allSeasonIcon from 'shared/assets/icons/season/allSeason.webp'
import summerIcon from 'shared/assets/icons/season/brightness.webp'
import winterIcon from 'shared/assets/icons/season/snow.webp'
import { Season } from 'shared/types/ProductDetailsTypes'

import s from './TiresImage.module.scss'

interface Props {
  className?: string
  image: string
  season: Season
}

export function TiresImage({ image, className, season }: Props) {
  const seasonIcons: Record<Season, string | null> = {
    summer: summerIcon,
    winter: winterIcon,
    all_seasons: allSeasonIcon,
  }

  const variant = season ? seasonIcons[season] : null

  return (
    <div className={clsx(s.imageContainer, className)}>
      <img
        className={s.image}
        src={image}
        alt={image}
      />

      <img
        className={s.seasonIcon}
        src={variant || undefined}
        alt="season"
      />
    </div>
  )
}

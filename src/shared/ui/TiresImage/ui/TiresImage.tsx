import clsx from 'clsx'

import allSeasonIcon from 'shared/assets/icons/season/allSeason.webp'
import summerIcon from 'shared/assets/icons/season/brightness.webp'
import winterIcon from 'shared/assets/icons/season/snow.webp'

import s from './TiresImage.module.scss'

interface Props {
  className?: string
  image: string
  season?: 'summer' | 'winter' | 'allSeason'
}

export function TiresImage({ image, className, season = 'allSeason' }: Props) {
  const seasonType = {
    summer: summerIcon,
    winter: winterIcon,
    allSeason: allSeasonIcon,
  }

  return (
    <div className={clsx(s.imageContainer, className)}>
      <img
        className={s.image}
        src={image}
        alt={image}
      />

      <img
        className={s.seasonIcon}
        src={seasonType[season]}
        alt="season"
      />
    </div>
  )
}

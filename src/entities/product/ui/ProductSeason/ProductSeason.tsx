import { SeasonType } from 'entities/product/types/types'

import { AllSeasonIcon } from 'shared/assets/icons/season/AllSeason'
import { BrightnessIcon } from 'shared/assets/icons/season/BrightnessIcon'
import { SnowIcon } from 'shared/assets/icons/season/SnowIcon'

const seasonIcons = {
  summer: <SnowIcon />,
  winter: <BrightnessIcon />,
  allSeason: <AllSeasonIcon />,
}

interface ProductSeasonProps {
  season: SeasonType
  className?: string
}

export function ProductSeason({ season, className }: ProductSeasonProps) {
  return <span className={className}>{seasonIcons[season]}</span>
  // <img
  //   src={seasonIcons[season]}
  //   alt={`${season} season icon`}
  //   className={className}
  // />
}

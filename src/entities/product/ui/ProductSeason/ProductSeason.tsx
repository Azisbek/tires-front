import { SeasonValue } from 'entities/product/types/types'

import { AllSeasonIcon } from 'shared/assets/icons/season/AllSeason'
import { BrightnessIcon } from 'shared/assets/icons/season/BrightnessIcon'
import { SnowIcon } from 'shared/assets/icons/season/SnowIcon'

const seasonIcons = {
  summer: <BrightnessIcon />,
  winter: <SnowIcon />,
  all_season: <AllSeasonIcon />,
}

interface ProductSeasonProps {
  season: {
    // label: string
    value: SeasonValue
  }
  className?: string
}

export function ProductSeason({ season, className }: ProductSeasonProps) {
  return <span className={className}>{seasonIcons[season.value]}</span>
}

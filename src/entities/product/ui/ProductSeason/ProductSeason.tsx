import { AllSeasonIcon } from 'shared/assets/icons/season/AllSeason'
import { BrightnessIcon } from 'shared/assets/icons/season/BrightnessIcon'
import { SnowIcon } from 'shared/assets/icons/season/SnowIcon'
import { SeasonType } from 'shared/types/CatalogpageTypes'

const seasonIcons = {
  summer: <BrightnessIcon />,
  winter: <SnowIcon />,
  all_seasons: <AllSeasonIcon />,
}

interface ProductSeasonProps {
  season: SeasonType
  className?: string
}

export function ProductSeason({ season, className }: ProductSeasonProps) {
  return <span className={className}>{seasonIcons[season]}</span>
}

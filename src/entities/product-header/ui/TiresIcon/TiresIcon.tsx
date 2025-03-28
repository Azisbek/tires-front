import allSeasonIcon from 'shared/assets/icons/season/allSeason.webp'
import summerIcon from 'shared/assets/icons/season/brightness.webp'
import winterIcon from 'shared/assets/icons/season/snow.webp'
import { Season } from 'shared/types/ProductDetailsTypes'

interface Props {
  season: Season
}

export function TiresIcon({ season }: Props) {
  const seasonIcons: Record<Season, string | null> = {
    summer: summerIcon,
    winter: winterIcon,
    all_seasons: allSeasonIcon,
  }

  const variant = season ? seasonIcons[season] : null

  return (
    <img
      src={variant || undefined}
      alt={season || 'Tire icon'}
      width={20}
      height={20}
    />
  )
}

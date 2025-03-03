import React from 'react'

import allSeason from 'shared/assets/icon/all-season.svg'
import brightness from 'shared/assets/icon/brightness.svg'
import snow from 'shared/assets/icon/snow.svg'

import { SeasonType } from '../model/types'

const seasonIcons = {
  winter: snow,
  summer: brightness,
  allSeason: allSeason,
}

export const ProductSeason: React.FC<{
  season: SeasonType
  className?: string
}> = ({ season, className }) => {
  return (
    <img
      src={seasonIcons[season]}
      alt={season}
      className={className}
    />
  )
}

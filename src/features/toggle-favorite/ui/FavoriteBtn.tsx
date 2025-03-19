import { isFavoriteType } from 'entities/product/types/types'

import { FavoriteIcon } from 'shared/assets/icons/FavoriteIcon'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './FavoriteBtn.module.scss'

interface Props {
  isFavorite: isFavoriteType
}

export function FavoriteBtn({ isFavorite }: Props) {
  return (
    <AppButton
      className={s.favoriteBtn}
      variant="border"
    >
      <FavoriteIcon isFavorite={isFavorite} />
    </AppButton>
  )
}

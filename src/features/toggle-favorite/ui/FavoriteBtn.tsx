import { isFavoriteType } from 'entities/product/types/types'

import { FavoriteIcon } from 'shared/assets/icon/FavoriteIcon'
import { AppButton } from 'shared/ui/AppButton/AppButton'

export function FavoriteBtn({ isFavorite }: { isFavorite: isFavoriteType }) {
  return (
    <AppButton variant="border">
      <FavoriteIcon isFavorite={isFavorite} />
    </AppButton>
  )
}

import { isFavoriteType } from 'entities/product/model/types'

import { FavoriteIcon } from 'shared/assets/icon/FavoriteIcon'
import { AppButton } from 'shared/ui/AppButton/AppButton'

export function FavoriteBtn({ isFavorite }: { isFavorite: isFavoriteType }) {
  return (
    <AppButton variant="borderWhite">
      <FavoriteIcon isFavorite={isFavorite} />
    </AppButton>
  )
}

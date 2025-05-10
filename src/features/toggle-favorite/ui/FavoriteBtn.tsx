import { isFavoriteType } from 'entities/product/model/types'

import FavIconActive from 'shared/assets/icon/favorite-icon-active.svg'
import FavIcon from 'shared/assets/icon/favorite-icon.svg'
import { AppButton } from 'shared/ui/AppButton/AppButton'

export const FavoriteBtn = ({ isFavorite }: { isFavorite: isFavoriteType }) => {
  return (
    <AppButton variant="borderWhite">
      {isFavorite ? (
        <img
          src={FavIconActive}
          alt="favorite"
        />
      ) : (
        <img
          src={FavIcon}
          alt="favorite"
        />
      )}
    </AppButton>
  )
}

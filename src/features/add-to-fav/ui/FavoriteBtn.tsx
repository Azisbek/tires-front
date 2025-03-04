import FavoriteIcon from 'shared/assets/icon/favorite-icon.svg'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './FavoriteBtn.module.scss'

export const FavBtn = ({ isFavorite }: { isFavorite: boolean }) => {
  return (
    <AppButton
      variant="borderWhite"
    >
      <img
        src={FavoriteIcon}
        alt="favorite"
      />
    </AppButton>
  )
}

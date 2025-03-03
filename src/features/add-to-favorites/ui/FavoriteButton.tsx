import FavoriteIcon from 'shared/assets/icon/favorite-icon.svg'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './FavoriteButton.module.scss'

export const FavoriteButton = ({ size }: { size: string }) => {
  console.log(size)

  return (
    <div
      style={{ width: size }}
      className={s.favorite}
    >
      <AppButton variant="borderWhite">
        <img
          src={FavoriteIcon}
          alt="favorite"
        />
      </AppButton>
    </div>
  )
}

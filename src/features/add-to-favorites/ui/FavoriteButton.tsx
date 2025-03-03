import FavoriteIcon from 'shared/assets/icon/favorite-icon.svg'
import { Button } from 'shared/ui/button'

import styles from './FavoriteButton.module.scss'

export const FavoriteButton = ({ size }: { size: string }) => {
  console.log(size)

  return (
    <Button
      style={{ width: '40px' }}
      className={styles.favorite}
    >
      <img
        src={FavoriteIcon}
        alt="favorite"
      />
    </Button>
  )
}

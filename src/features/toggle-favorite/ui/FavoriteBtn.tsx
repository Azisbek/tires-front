import { useState } from 'react'

import { FavoriteIcon } from 'shared/assets/icons/FavoriteIcon'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import { useUpdateFavoriteStatusMutation } from '../api'

import s from './FavoriteBtn.module.scss'

interface FavoriteBtnProps {
  product_Id: number
  is_favorite: boolean
}

export function FavoriteBtn({ is_favorite, product_Id }: FavoriteBtnProps) {
  const [isActive, setIsActive] = useState(is_favorite)
  const [updateFavoriteStatus] = useUpdateFavoriteStatusMutation()

  const toggleFavorite = async () => {
    const newFavoriteStatus = !is_favorite
    try {
      await updateFavoriteStatus({
        product_id: product_Id,
        is_favorite: newFavoriteStatus,
      })
      setIsActive(newFavoriteStatus)
    } catch (error) {
      console.error('Ошибка при изменении статуса избранного', error)
    }
  }

  return (
    <AppButton
      onClick={toggleFavorite}
      className={s.favoriteBtn}
      variant="border"
    >
      <FavoriteIcon isActive={isActive} />
    </AppButton>
  )
}

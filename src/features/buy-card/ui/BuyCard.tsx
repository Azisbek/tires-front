import { useState } from 'react'

import { FavoriteBtn } from 'features/toggle-favorite'

import { PurchaseCard } from 'entities/purchase-card'

import { BuyCardTypes } from 'shared/types/ProductDetailsTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { InputCounter } from 'shared/ui/input-components'

import s from './BuyCard.module.scss'

interface Props {
  data: BuyCardTypes
}

export function BuyCard({ data }: Props) {
  const [value, setValue] = useState<number | undefined>(data.count)

  const incrementFunc = () => setValue((prev) => (prev ?? 0) + 1)

  const decrementFunc = () =>
    setValue((prev) => (prev && prev > 1 ? prev - 1 : prev))

  return (
    <PurchaseCard
      className={s.purchaseCard}
      id={data.id}
      price={data.price}
      promotion={data.promotion}
      warranty={data.warranty}
      in_stock={data.in_stock}
      count={value} // временно, может быть
    >
      <InputCounter
        value={value}
        increment={incrementFunc}
        decrement={decrementFunc}
      />

      <AppButton
        className={s.btn}
        variant="accent"
      >
        В корзину
      </AppButton>

      <FavoriteBtn isFavorite={data.favorite} />
    </PurchaseCard>
  )
}

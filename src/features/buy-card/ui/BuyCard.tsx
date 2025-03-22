import { useState } from 'react'

import { FavoriteBtn } from 'features/toggle-favorite'

import { PurchaseCard } from 'entities/purchase-card'

import { PurchaseCardProps } from 'shared/types/PurchaseCardTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { InputCounter } from 'shared/ui/InputCounter/InputCounter'

import s from './BuyCard.module.scss'

interface Props {
  data: PurchaseCardProps
}

export function BuyCard({ data }: Props) {
  const [value, setValue] = useState(1)

  const incrementFunc = () => setValue((prev) => prev + 1)

  const decrementFunc = () => setValue((prev) => (prev > 1 ? prev - 1 : prev))

  return (
    <PurchaseCard
      className={s.purchaseCard}
      id={data.id}
      price={data.price}
      promotion={data.promotion}
      quantity={data.quantity}
      guarantee={data.guarantee}
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

      <FavoriteBtn isFavorite={false} />
    </PurchaseCard>
  )
}

// Протестировать purchase вместо buyCard переместив в feature

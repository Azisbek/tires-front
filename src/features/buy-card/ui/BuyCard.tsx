import { useState } from 'react'

import { PopupAddCart } from 'widgets/popups/ui/PopupAddCart/PopupAddCart'

import { FavoriteBtn } from 'features/toggle-favorite'

import { PurchaseCard } from 'entities/purchase-card'

import { BuyCardTypes } from 'shared/types/ProductDetailsTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { InputCounter } from 'shared/ui/input-components'
import { LoaderFullScreen } from 'shared/ui/loader-components'

import { useAddToCartMutation } from '../api'

import s from './BuyCard.module.scss'

interface Props {
  data: BuyCardTypes
  title: string
  images: string[]
}

export function BuyCard({ data, title, images }: Props) {
  const [addToCart, { isLoading }] = useAddToCartMutation()

  const [count, setCount] = useState<number | undefined>(data.count)
  const [isPopup, setIsPopup] = useState(false)

  const incrementFunc = () => setCount((prev) => (prev ?? 0) + 1)

  const decrementFunc = () =>
    setCount((prev) => (prev && prev > 1 ? prev - 1 : prev))

  const handleAddToCart = async () => {
    const dataProduct = {
      product: data.id,
      count: count,
    }

    try {
      await addToCart(dataProduct).unwrap()
      setIsPopup(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PurchaseCard
      className={s.purchaseCard}
      id={data.id}
      price={data.price}
      promotion={data.promotion}
      warranty={data.warranty}
      in_stock={data.in_stock}
      count={count}
    >
      {isLoading && <LoaderFullScreen size={60} />}
      {isPopup && (
        <PopupAddCart
          onClick={() => setIsPopup(false)}
          title={title}
          codeProduct={data.id}
          inStock={data.in_stock || 0}
          price={data.price || 0}
          quantity={data.count || 0}
          images={images}
        />
      )}

      <InputCounter
        value={count}
        increment={incrementFunc}
        decrement={decrementFunc}
      />

      <AppButton
        className={s.btn}
        variant="accent"
        onClick={handleAddToCart}
      >
        В корзину
      </AppButton>

      <FavoriteBtn
        is_favorite={data?.favorite ?? false}
        product_Id={data.id}
      />
    </PurchaseCard>
  )
}

import { useCartFunc } from 'features/cart-item/model/useCartFunc'

import { SwipingImage } from 'shared/ui/SwipingImage/ui/SwipingImage'
import { InputCounter } from 'shared/ui/input-components'
import { LoaderFullScreen } from 'shared/ui/loader-components'

import s from './CartItemMobile.module.scss'

interface Props {
  images?: string[]
  title: string
  codeProduct: number
  inStock: number
  price: number
  quantity: number
  handleUpdateBasket: () => void
}

export function CartItemMobile({
  images,
  title,
  codeProduct,
  inStock,
  price,
  quantity,
  handleUpdateBasket,
}: Props) {
  const { count, isLoading, increment, decrement, handleDelete } = useCartFunc(
    quantity,
    codeProduct,
    handleUpdateBasket,
  )

  return (
    <div className={s.cartItem}>
      {isLoading && <LoaderFullScreen />}

      <SwipingImage
        images={images || []}
        width={170}
        height={170}
        className={s.image}
      />

      <p className={s.title}>{title}</p>

      <p className={s.code}>Код товара: {codeProduct}</p>

      <p className={s.inStock}>В наличии: {inStock}</p>

      <div className={s.content}>
        <p className={s.price}>Цена: {price} ₽</p>

        <InputCounter
          value={count}
          increment={increment}
          decrement={decrement}
          className={s.counter}
        />
      </div>

      <button
        className={s.close}
        onClick={handleDelete}
      >
        <img
          src="src/shared/assets/icons/close.webp"
          alt="close"
          width={16}
          height={16}
        />
      </button>
    </div>
  )
}

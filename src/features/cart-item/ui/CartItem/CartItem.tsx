import { useCartFunc } from 'features/cart-item/model/useCartFunc'

import { SwipingImage } from 'shared/ui/SwipingImage/ui/SwipingImage'
import { InputCounter } from 'shared/ui/input-components'
import { LoaderFullScreen } from 'shared/ui/loader-components'

import s from './CartItem.module.scss'

interface Props {
  images?: string[]
  title: string
  codeProduct: number
  inStock: number
  price: number
  quantity: number
  handleUpdateBasket?: () => void
}

export function CartItem({
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
        width={144}
        height={144}
      />

      <div className={s.content}>
        <div className={s.details}>
          <p className={s.title}>{title}</p>

          <InputCounter
            value={count}
            increment={increment}
            decrement={decrement}
          />
        </div>

        <p className={s.code}>Код товара: {codeProduct}</p>

        <p className={s.inStock}>В наличии: {inStock}</p>

        <p className={s.price}>Цена: {price} ₽</p>
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

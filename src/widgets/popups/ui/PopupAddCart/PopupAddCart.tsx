import { useNavigate } from 'react-router-dom'

import { useGetCartQuery } from 'pages/cart/api'

import { CartItem } from 'features/cart-item'

import { navigationMap } from 'shared/model/navigation'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { PopupLayout } from 'shared/ui/PopupLayout'
import { Title } from 'shared/ui/Text'

import s from './PopupAddCart.module.scss'

interface Props {
  onClick: () => void
  title: string
  codeProduct: number
  inStock: number
  price: number
  quantity: number
  images: string[]
}

export function PopupAddCart({
  onClick,
  images,
  title,
  codeProduct,
  inStock,
  price,
  quantity,
}: Props) {
  const { data } = useGetCartQuery()
  const navigate = useNavigate()

  return (
    <PopupLayout onClick={onClick}>
      <section>
        <Title
          color="black"
          size="lg-32"
          className={s.title}
        >
          Товар добавлен в корзину
        </Title>

        <CartItem
          images={images}
          title={title}
          codeProduct={codeProduct}
          inStock={inStock}
          price={price}
          quantity={quantity}
        />

        <div className={s.container}>
          <div className={s.buttons}>
            <AppButton
              className={s.btn}
              onClick={() => navigate(navigationMap.Cart)}
              variant="accent"
            >
              Перейти в корзину
            </AppButton>
            <AppButton
              className={s.btn}
              onClick={onClick}
              variant="border"
            >
              Продолжить покупки
            </AppButton>
          </div>

          <div className={s.prices}>
            <p className={s.subTitle}>
              В корзине {data?.cart.total_quantity} товаров
            </p>
            <p className={s.subTitle}>на сумму {data?.cart.subtotal} C</p>
          </div>
        </div>
      </section>
    </PopupLayout>
  )
}

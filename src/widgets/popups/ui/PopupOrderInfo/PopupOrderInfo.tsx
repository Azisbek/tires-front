import { CartList } from 'widgets/cart-list'

import { CartItemType } from 'shared/types/CartTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { PopupLayout } from 'shared/ui/PopupLayout'
import { Title } from 'shared/ui/Text'

import s from './PopupOrderInfo.module.scss'

const product: CartItemType[] = [
  {
    image: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjclDv0e9IVQdcKL5CgI8DITEgglEavaKqww&s',
    ],
    title: 'Мощная зимняя шина',
    product_Id: 98765,
    in_stock: 42,
    price: 12500,
    count: 1,
  },
  {
    image: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjclDv0e9IVQdcKL5CgI8DITEgglEavaKqww&s',
    ],
    title: 'Мощная зимняя шина',
    product_Id: 98765,
    in_stock: 42,
    price: 12500,
    count: 1,
  },
  {
    image: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjclDv0e9IVQdcKL5CgI8DITEgglEavaKqww&s',
    ],
    title: 'Мощная зимняя шина',
    product_Id: 98765,
    in_stock: 42,
    price: 12500,
    count: 1,
  },
]

interface Props {
  items?: string[]
  orderId: number
  status: boolean
  created_at: string
  paymentMethod: boolean
  delivery: boolean
  address: string
  totalQuantity: number | undefined
  finalPrice: number | undefined
  onClick: () => void
}

export function PopupOrderInfo({
  items,
  orderId,
  status,
  created_at,
  paymentMethod,
  delivery,
  address,
  totalQuantity,
  finalPrice,
  onClick,
}: Props) {
  return (
    <PopupLayout onClick={onClick}>
      <section className={s.container}>
        <div className={s.content}>
          <Title size="lg-32">Информация о заказе № {orderId}</Title>

          <p className={s.subTitle}>
            Статус:
            {status ? (
              <span className={s.success}>Принять</span>
            ) : (
              <span className={s.canceled}>Отменен</span>
            )}
          </p>
          <p className={s.subTitle}>Дата создания: {created_at}</p>
          <p className={s.subTitle}>
            Оплата: {paymentMethod ? 'Банковской картой' : 'Наличными'}
          </p>
          <p className={s.subTitle}>
            Способ получения: {delivery ? 'Доставка' : 'Самовызов'}
          </p>
          <p className={s.subTitle}>
            {delivery ? 'Адрес доставки:' : 'Адрес самовывоза:'} {address}
          </p>
        </div>

        {items && items.length > 0 && (
          <div className={s.orderDetails}>
            <Title>Детали заказа</Title>

            <div className={s.cartList}>
              <CartList
                data={product}
                handleUpdateBasket={() => console.log('test')}
              />
            </div>

            <p className={s.subTitle}>В заказе {totalQuantity} товар</p>
            <p className={s.subTitle}>на сумму {finalPrice} ₽</p>
          </div>
        )}

        <AppButton
          variant="border"
          onClick={onClick}
          className={s.btn}
        >
          Закрыт
        </AppButton>
      </section>
    </PopupLayout>
  )
}

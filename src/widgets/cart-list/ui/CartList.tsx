import { CartItem, CartItemMobile } from 'features/cart-item'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { CartItemType } from 'shared/types/CartTypes'

import s from './CartList.module.scss'

interface Props {
  data?: CartItemType[]
  handleUpdateBasket: () => void
}

export function CartList({ data, handleUpdateBasket }: Props) {
  const { width } = useScreenWidth()

  return (
    <section className={s.cartList}>
      {data?.map((item) =>
        width < 1024 ? (
          <CartItemMobile
            key={item.product_Id}
            images={item.image}
            title={item.title}
            codeProduct={item.product_Id}
            inStock={item.in_stock}
            price={item.price}
            quantity={item.count}
            handleUpdateBasket={handleUpdateBasket}
          />
        ) : (
          <CartItem
            key={item.product_Id}
            images={item.image}
            title={item.title}
            codeProduct={item.product_Id}
            inStock={item.in_stock}
            price={item.price}
            quantity={item.count}
            handleUpdateBasket={handleUpdateBasket}
          />
        ),
      )}
    </section>
  )
}

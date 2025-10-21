import clsx from 'clsx'

import { useNavigate } from 'react-router-dom'

import { CartList } from 'widgets/cart-list'

import { BuyFinalCard } from 'features/buy-final-card'

import { navigationMap } from 'shared/model/navigation'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Empty } from 'shared/ui/Empty'

import { useGetCartQuery } from '../api'

import s from './CartPage.module.scss'

export function CartPage() {
  const { data, refetch } = useGetCartQuery()
  const navigate = useNavigate()

  const handleQuantityUpdate = () => {
    refetch()
  }

  return (
    <div className={clsx(s.cartPage, s.container)}>
      <h1 className={s.title}>Корзина</h1>

      <div className={s.content}>
        {data?.cart_items.length === 0 || !data ? (
          <Empty
            to={navigationMap.Catalog}
            title="Корзина пуста"
            description="Добавьте товары в корзину, чтобы продолжить покупку"
          />
        ) : (
          <CartList
            data={data?.cart_items}
            handleUpdateBasket={handleQuantityUpdate}
          />
        )}

        <BuyFinalCard
          discount={data?.cart.promotion_total}
          finalPrice={data?.cart.subtotal}
          totalQuantity={data?.cart.total_quantity}
        >
          <AppButton
            variant="accent"
            onClick={() => navigate(navigationMap.ConfirmOrder)}
            className={s.btn}
          >
            Оформить заказ
          </AppButton>
        </BuyFinalCard>
      </div>
    </div>
  )
}

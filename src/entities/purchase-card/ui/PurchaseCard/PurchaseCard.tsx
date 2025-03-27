import { formatPrice } from 'shared/lib/formatPrice'
import { BuyCardTypes } from 'shared/types/ProductDetailsTypes'
import { Text, Title } from 'shared/ui/Text'

import { BuyInfoContainer } from '../BuyInfoContainer/BuyInfoContainer'

import s from './PurchaseCard.module.scss'

interface Props extends BuyCardTypes {
  children?: React.ReactNode
  className?: string
}

export function PurchaseCard({
  price = 0,
  promotion = 0,
  warranty = '',
  in_stock = 0,
  children,
  className,
  count = 0,
}: Props) {
  const totalPrice = promotion < price ? promotion : price

  const formattedPrice = formatPrice(totalPrice)
  const formattedPrice4 = formatPrice(totalPrice * count)

  return (
    <div className={s.purchaseCard}>
      <div className={s.priceContainer}>
        {promotion < price && (
          <Text className={s.promotion}>{formatPrice(price)} C</Text>
        )}

        <Title
          className={s.price}
          size="xl-40"
        >
          {formattedPrice} C <span>за 1 шт.</span>
        </Title>

        <Text>{`${formattedPrice} x ${formatPrice(count)} = ${formattedPrice4}`}</Text>
      </div>

      <div className={className}>{children}</div>

      <BuyInfoContainer
        warranty={warranty}
        inStock={in_stock}
      />
    </div>
  )
}

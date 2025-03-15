import { formatPrice } from 'shared/lib/formatPrice'
import { PurchaseCardProps } from 'shared/types/PurchaseCardTypes'
import { Text, Title } from 'shared/ui/Text'

import { BuyInfoContainer } from '../BuyInfoContainer/BuyInfoContainer'

import s from './PurchaseCard.module.scss'

export function PurchaseCard({
  price,
  promotion,
  quantity,
  guarantee,
  children,
  className,
}: PurchaseCardProps) {
  return (
    <div className={s.purchaseCard}>
      <div className={s.priceContainer}>
        <Text className={s.promotion}>{formatPrice(promotion)} C</Text>

        <Title
          className={s.price}
          size="xl-40"
        >
          {formatPrice(price)} C <span>за 1 шт.</span>
        </Title>

        <Text>{`${formatPrice(price)} x ${formatPrice(quantity)} = ${formatPrice(price * quantity)}`}</Text>
      </div>

      <div className={className}>{children}</div>

      <BuyInfoContainer guarantee={guarantee} />
    </div>
  )
}

import { formatPrice } from 'shared/lib/formatPrice'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './ProductPrice.module.scss'

interface Props {
  price: number
  promotion?: number
  negotiable?: boolean
  className?: string
  onClick?: () => void
}

export function ProductPrice({ price, promotion, negotiable, onClick }: Props) {
  return (
    <AppButton
      className={s.btn}
      variant="accent"
      onClick={onClick}
    >
      {negotiable ? (
        <span className={s.dogovornaya}>Договорная</span>
      ) : promotion ? (
        <span className={s.prices}>
          <span className={s.oldPrice}>{formatPrice(price)} С</span>
          <span className={s.newPrice}>{formatPrice(promotion)} С</span>
        </span>
      ) : (
        `${formatPrice(price)} С`
      )}
    </AppButton>
  )
}

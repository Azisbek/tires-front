import { useNavigate } from 'react-router-dom'

import { formatPrice } from 'shared/lib/formatPrice'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './ProductPrice.module.scss'

interface ProductPriceProps {
  id: number
  price: number
  promotion?: number
  negotiable?: boolean
  className?: string
}

export function ProductPrice({
  id,
  price,
  promotion,
  negotiable,
}: ProductPriceProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/catalog/${id}`)
  }

  return (
    <AppButton
      className={s.btn}
      variant="accent"
      onClick={handleClick}
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

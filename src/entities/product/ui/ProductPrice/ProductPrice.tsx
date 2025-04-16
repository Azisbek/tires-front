import { useNavigate } from 'react-router-dom'

import { formatPrice } from 'shared/lib/formatPrice'
import { AppButton } from 'shared/ui/AppButton/AppButton'

export interface ProductPriceProps {
  children: number
  className?: string
  id: number
}

export function ProductPrice({ children, id, className }: ProductPriceProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/catalog/${id}`)
  }
  return (
    <AppButton
      className={className}
      variant="accent"
      onClick={handleClick}
    >
      {formatPrice(children)} С
    </AppButton>
  )
}

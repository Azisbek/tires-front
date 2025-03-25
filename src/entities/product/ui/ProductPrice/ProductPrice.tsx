import { formatPrice } from 'shared/lib/formatPrice'
import { AppButton } from 'shared/ui/AppButton/AppButton'

export interface ProductPriceProps {
  children: number
  className?: string
}

export function ProductPrice({ children, className }: ProductPriceProps) {
  return (
    <AppButton
      className={className}
      variant="accent"
    >
      {formatPrice(children)} С
    </AppButton>
  )
}

import { ProductPriceProps } from 'entities/product/types/types'

import { formatPrice } from 'shared/lib/formatPrice'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import { ProductPriceProps } from '../../types/types'

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

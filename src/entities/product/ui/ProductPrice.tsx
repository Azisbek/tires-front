import { formatPrice } from 'shared/lib/utils'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import { ProductPriceProps } from '../model/types'

export const ProductPrice = ({ children, className }: ProductPriceProps) => {
  return (
    <AppButton
      className={className}
      variant="accent"
    >
      {formatPrice(children)} С
    </AppButton>
  )
}

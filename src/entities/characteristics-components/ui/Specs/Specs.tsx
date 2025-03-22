import { descriptionContainer } from 'widgets/product-details/api/data'

import { ProductSpecs } from 'shared/ui/ProductSpecs'

export function Specs() {
  return (
    <div>
      <ProductSpecs
        specs={descriptionContainer}
        color="dark"
      />
    </div>
  )
}

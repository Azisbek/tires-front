import { useOutletContext } from 'react-router-dom'

import { ProductDetailsTypes } from 'shared/types/ProductDetailsTypes'
import { ProductSpecs } from 'shared/ui/ProductSpecs'

export function Specs() {
  const data = useOutletContext<ProductDetailsTypes>()

  return (
    <div>
      <ProductSpecs
        specs={data.characteristics}
        color="dark"
      />
    </div>
  )
}

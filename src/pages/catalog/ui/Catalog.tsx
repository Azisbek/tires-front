import { CatalogProducts } from 'widgets/catalog-products'

import { InputSelect } from 'shared/ui/InputSelect/InputSelect'
import { Text, Title } from 'shared/ui/Text'

export function Catalog() {
  return (
    <div>
      <Title size="xl-40">Шины в Бишкеке</Title>
      <Text>Hello World</Text>
      <CatalogProducts />
    </div>
  )
}

import { CatalogFilter } from 'widgets/catalog-filter'
import { CatalogProducts } from 'widgets/catalog-products'
import { TireInfoSection } from 'widgets/tireInfoSection'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { Text, Title } from 'shared/ui/Text'

import s from './Catalog.module.scss'

export function Catalog() {
  const { isMobile } = useScreenWidth()

  return (
    <div>
      <Title size="xl-40">Шины в Бишкеке</Title>
      <Text>Hello World</Text>
      <div className={s.container}>
        {!isMobile && <CatalogFilter />}
        <CatalogProducts />
      </div>
      <TireInfoSection />
    </div>
  )
}

import { CatalogFilter } from 'widgets/catalog-filter'
import { CatalogProducts } from 'widgets/catalog-products'
import { TireInfoSection } from 'widgets/tireInfoSection'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { Title } from 'shared/ui/Text'

import s from './Catalog.module.scss'

export function Catalog() {
  const { isMobile } = useScreenWidth()

  return (
    <div className={s.wrapper}>
      <Title
        className={s.title}
        size="xl-40"
      >
        Шины в Бишкеке
      </Title>
      <div className={s.container}>
        {!isMobile && <CatalogFilter />}
        <div className={s.content}>
          <CatalogProducts />
          <TireInfoSection />
        </div>
      </div>
    </div>
  )
}

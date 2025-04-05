import { CatalogFilter } from 'widgets/catalog-filter'
import { CatalogProducts } from 'widgets/catalog-products'
import { TireInfoSection } from 'widgets/tireInfoSection'

import { useCatalogProducts } from 'shared/hooks/useCatalogProducts'
import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { Title } from 'shared/ui/Text'

import s from './Catalog.module.scss'

export function Catalog() {
  const { isMobile } = useScreenWidth()
  const { data, isLoading, handlePageChange, handleSortChange, currentSort } =
    useCatalogProducts()

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
          <CatalogProducts
            data={data}
            isLoading={isLoading}
            onChangePage={handlePageChange}
            onSortChange={handleSortChange}
            currentSort={currentSort}
          />
          <TireInfoSection />
        </div>
      </div>
    </div>
  )
}

import { CatalogFilter } from 'widgets/catalog-filter'
import { CatalogProducts } from 'widgets/catalog-products'
import { TireInfoSection } from 'widgets/tireInfoSection'

import { useCatalogProducts } from 'shared/hooks/useCatalogProducts'
import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { Title } from 'shared/ui/Text'

import s from './Catalog.module.scss'
import { Pagination } from 'features/pagination'

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
            onSortChange={handleSortChange}
            currentSort={currentSort}
          />
          {data && (
            <Pagination
              meta={data}
              className={s.mgTop22}
              onPageChange={handlePageChange}
            />
          )}
          <TireInfoSection />
        </div>
      </div>
    </div>
  )
}

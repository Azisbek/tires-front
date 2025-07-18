import { CatalogFilter } from 'widgets/catalog-filter'
import { CatalogProducts } from 'widgets/catalog-products'
import { TireInfoSection } from 'widgets/tireInfoSection'

import { Pagination } from 'features/pagination'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { useAppSelector } from 'shared/lib/hooks'
import { Empty } from 'shared/ui/Empty'
import { Title } from 'shared/ui/Text'

import { useFilters } from '../../../widgets/catalog-filter/model/useFilters'
import { useGetProductsQuery } from '../api'
import { cleanParams } from '../model/cleanParams'
import { useCatalogParams } from '../model/useCatalogParams '

import s from './Catalog.module.scss'

export function Catalog() {
  const { isMobile } = useScreenWidth()
  const searchProducts = useAppSelector((state) => state.search.productSearch)

  const { currentPage, setCurrentPage, ordering, setOrdering } =
    useCatalogParams()

  const { filters } = useFilters()

  const rawParams = {
    ...filters,
    search: searchProducts,
    page: currentPage,
    sort_by_price: ordering,
  }

  const queryParams = cleanParams(rawParams)

  const { data, isFetching, refetch } = useGetProductsQuery(queryParams)

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
          {data?.products.length === 0 ? (
            <Empty
              className={s.empty}
              title="Нет товаров"
              description="К сожалению, мы не нашли товаров, соответствующих вашему запросу."
            />
          ) : (
            <CatalogProducts
              data={data}
              isLoading={isFetching}
              setOrdering={setOrdering}
              ordering={ordering}
              refetch={refetch}
            />
          )}

          <div className={s.pagination}>
            {data && (
              <Pagination
                data={data}
                onPageChange={setCurrentPage}
              />
            )}
          </div>

          <TireInfoSection />
        </div>
      </div>
    </div>
  )
}

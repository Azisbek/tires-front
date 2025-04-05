import { ProductList } from 'widgets/product-list'

import { FilterModal } from 'features/filter-modal'
import { Pagination } from 'features/pagination'
import { SortSelect } from 'features/sort-select'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { ProductListResponse } from 'shared/types/CatalogpageTypes'
import { Text } from 'shared/ui/Text'

import s from './CatalogProducts.module.scss'

interface CatalogProductsProps {
  data?: ProductListResponse
  onChangePage: (page: number) => void
  onSortChange: (sort: string) => void
  isLoading: boolean
  currentSort: string
}

export function CatalogProducts({
  data,
  onChangePage,
  onSortChange,
  isLoading,
  currentSort,
}: CatalogProductsProps) {
  const { isMobile } = useScreenWidth()

  return (
    <section className={s.container}>
      <div className={s.topContainer}>
        <SortSelect
          onChange={onSortChange}
          currentSort={currentSort}
        />
        {isMobile && (
          <div className={s.grid}>
            <FilterModal />
          </div>
        )}
        <Text
          size="sm-14"
          className={s.text}
        >
          Товаров: {data?.total_count}
        </Text>
      </div>

      <ProductList
        className={s.rowGap88}
        products={data?.products ?? []}
        isLoading={isLoading}
      />

      {data && (
        <Pagination
          meta={data}
          className={s.mgTop22}
          onPageChange={onChangePage}
        />
      )}
    </section>
  )
}

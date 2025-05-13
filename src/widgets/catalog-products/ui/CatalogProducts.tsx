import { ProductList } from 'widgets/product-list'

import { FilterModal } from 'features/filter-modal'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { ProductListResponse } from 'shared/types/CatalogpageTypes'
import { Text } from 'shared/ui/Text'
import { InputSelect } from 'shared/ui/input-components'

import s from './CatalogProducts.module.scss'

interface CatalogProductsProps {
  data?: ProductListResponse
  setOrdering: (sort: string) => void
  isLoading: boolean
  ordering: string
  refetch: () => void
}

export function CatalogProducts({
  data,
  setOrdering,
  isLoading,
  ordering,
}: CatalogProductsProps) {
  const { isMobile } = useScreenWidth()

  const handleChange = () => {
    setOrdering(ordering === 'expensive' ? 'cheap' : 'expensive')
  }

  return (
    <section className={s.container}>
      <div className={s.topContainer}>
        <InputSelect
          onChange={handleChange}
          className="select"
          color="white"
          options={['Сначала дорогие', 'Сначала дешевые']}
          defaultValue={
            ordering === 'expensive' ? 'Сначала дорогие' : 'Сначала дешевые'
          }
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
    </section>
  )
}

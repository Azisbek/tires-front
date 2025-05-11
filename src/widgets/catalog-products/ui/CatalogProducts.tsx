import { ProductList } from 'widgets/product-list'

import { FilterModal } from 'features/filter-modal'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { ProductListResponse } from 'shared/types/CatalogpageTypes'
import { Text } from 'shared/ui/Text'
import { InputSelect } from 'shared/ui/input-components'

import s from './CatalogProducts.module.scss'

interface CatalogProductsProps {
  data?: ProductListResponse
  onSortChange: (sort: string) => void
  isLoading: boolean
  currentSort: string
}

const sortOptions = [
  { id: 'price', label: 'Сначала дорогие' },
  { id: '-price', label: 'Сначала дешевые' },
]

export function CatalogProducts({
  data,
  onSortChange,
  isLoading,
  currentSort,
}: CatalogProductsProps) {
  const { isMobile } = useScreenWidth()
  const selectedOption = sortOptions.find((opt) => opt.id === currentSort)

  const handleChange = (label: string) => {
    const selected = sortOptions.find((opt) => opt.label === label)
    if (selected) {
      onSortChange(selected.id)
    }
  }

  return (
    <section className={s.container}>
      <div className={s.topContainer}>
        <InputSelect
          onChange={handleChange}
          className="select"
          color="white"
          options={sortOptions.map((opt) => opt.label)}
          defaultValue={selectedOption?.label}
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

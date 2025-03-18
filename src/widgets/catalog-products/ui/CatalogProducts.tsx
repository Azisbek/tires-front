import { useMemo, useState } from 'react'

import { CatalogFilter } from 'widgets/catalog-filter'
import { ProductList } from 'widgets/product-list'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { InputSelect } from 'shared/ui/InputSelect/InputSelect'
import { Modal } from 'shared/ui/Modal'
import { Text } from 'shared/ui/Text'

import { catalogProductsMock } from '../api/data'

import s from './CatalogProducts.module.scss'

const sortOptions = [
  { id: 'price_desc', label: 'Сначала дорогие' },
  { id: 'price_asc', label: 'Сначала дешевые' },
  { id: 'popular_asc', label: 'Сначала с высоким рейтингом' },
  // { id: 'price_asc', label: 'С большими скидками' },
]
export function CatalogProducts() {
  const { isMobile } = useScreenWidth()
  const [sort, setSort] = useState<string>('')

  const filteredProducts = useMemo(() => {
    return catalogProductsMock.sort((a, b) => {
      switch (sort) {
        case 'price_desc':
          return b.price - a.price
        case 'price_asc':
          return a.price - b.price
        case 'popular_asc':
          return b.rating - a.rating
        default:
          return 0
      }
    })
  }, [sort])

  return (
    <section className={s.container}>
      <div className={s.topContainer}>
        
        <InputSelect
          color="white"
          options={sortOptions.map((option) => option.label)}
          defaultValue="Выберите сортировку"
          onChange={(value) => {
            const selected = sortOptions.find((opt) => opt.label === value)
            setSort(selected ? selected.id : '')
          }}
        />
        {isMobile && (
          <Modal variant="white" openText='Фильтр'>
            <CatalogFilter />
          </Modal>
        )}
        <Text
          size="sm-14"
          className={s.text}
        >
          Товаров: {filteredProducts.length}
        </Text>
      </div>

      <ProductList products={filteredProducts} />
    </section>
  )
}

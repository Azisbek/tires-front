import { useState } from 'react'

import { CatalogFilter } from 'widgets/catalog-filter'
import { ProductList } from 'widgets/product-list'

import { Pagination } from 'features/pagination'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { ProductListResponse } from 'shared/types/CatalogpageTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { InputSelect } from 'shared/ui/InputSelect/InputSelect'
import { Modal } from 'shared/ui/Modal'
import { Text } from 'shared/ui/Text'

import s from './CatalogProducts.module.scss'

const sortOptions = [
  { id: '-price', label: 'Сначала дорогие' },
  { id: 'price', label: 'Сначала дешевые' },
]
interface CatalogProductsProps {
  data?: ProductListResponse
  onChangePage: (page: number) => void
  onSortChange: (sort: string) => void
}
export function CatalogProducts({
  data,
  onChangePage,
  onSortChange,
}: CatalogProductsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useScreenWidth()

  const onInputSelectChange = (value: string) => {
    const selectedSort = sortOptions.find((opt) => opt.label === value)?.id
    if (selectedSort) {
      onSortChange(selectedSort)
    }
  }

  return (
    <section className={s.container}>
      <div className={s.topContainer}>
        <InputSelect
          onChange={onInputSelectChange}
          className={s.select}
          color="white"
          options={sortOptions.map((option) => option.label)}
          defaultValue="Выберите сортировку"
        />
        {isMobile && (
          <div className={s.grid}>
            <AppButton
              variant="accent"
              onClick={() => setIsOpen(true)}
            >
              Фильтр
            </AppButton>
            <Modal
              variant="opacity"
              className={s.modal}
              isOpen={isOpen}
              onClick={setIsOpen}
            >
              <CatalogFilter />
            </Modal>
          </div>
        )}
        <Text
          size="sm-14"
          className={s.text}
        >
          Товаров: 2025
        </Text>
      </div>
      <ProductList
        className={s.rowGap88}
        products={data?.products ?? []}
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

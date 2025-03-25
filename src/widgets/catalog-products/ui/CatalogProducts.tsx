import { useState } from 'react'

import { useGetProductsQuery } from 'pages/catalog/api'

import { CatalogFilter } from 'widgets/catalog-filter'
import { ProductList } from 'widgets/product-list'

import { Pagination } from 'features/pagination'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { InputSelect } from 'shared/ui/InputSelect/InputSelect'
import { Modal } from 'shared/ui/Modal'
import { Text } from 'shared/ui/Text'

import s from './CatalogProducts.module.scss'

const sortOptions = [
  { id: 'price_desc', label: 'Сначала дорогие' },
  { id: 'price_asc', label: 'Сначала дешевые' },
  { id: 'popular_asc', label: 'Сначала с высоким рейтингом' },
]

export function CatalogProducts() {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useScreenWidth()
  const [currentPage, setCurrentPage] = useState(1)

  const { data } = useGetProductsQuery({ page: currentPage, page_size: 12 })

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section className={s.container}>
      <div className={s.topContainer}>
        <InputSelect
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
          onPageChange={handlePageChange}
        />
      )}
    </section>
  )
}

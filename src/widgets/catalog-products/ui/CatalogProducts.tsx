import { useState } from 'react'

import { CatalogFilter } from 'widgets/catalog-filter'
import { ProductList } from 'widgets/product-list'

import { FilterIcon } from 'shared/assets/icons/FilterIcon'
import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { AppButton } from 'shared/ui/AppButton/AppButton'
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
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useScreenWidth()

  return (
    <section className={s.container}>
      <div className={s.topContainer}>
        {isMobile && (
          <>
            <AppButton
              className={s.modalButton}
              variant="accent"
              onClick={() => setIsOpen(true)}
            >
              <FilterIcon /> Фильтр
            </AppButton>
            <Modal
              variant="opacity"
              className={s.modal}
              isOpen={isOpen}
              onClick={setIsOpen}
            >
              <CatalogFilter />
            </Modal>
          </>
        )}
        <InputSelect
          className={s.select}
          color="white"
          options={sortOptions.map((option) => option.label)}
          defaultValue="Выберите сортировку"
        />

        <Text
          size="sm-14"
          className={s.text}
        >
          Товаров: 263
        </Text>
      </div>

      <ProductList
        className={s.rowGap88}
        products={catalogProductsMock}
      />
    </section>
  )
}

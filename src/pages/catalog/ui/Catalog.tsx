import { useState } from 'react'

import { CatalogFilter } from 'widgets/catalog-filter'
import { CatalogProducts } from 'widgets/catalog-products'
import { TireInfoSection } from 'widgets/tireInfoSection'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { Title } from 'shared/ui/Text'

import { useGetProductsQuery } from '../api'

import s from './Catalog.module.scss'

export function Catalog() {
  const [currentPage, setCurrentPage] = useState(1)
  const [ordering, setOrdering] = useState<string | undefined>(undefined)

  const { isMobile } = useScreenWidth()

  const { data } = useGetProductsQuery({
    page: currentPage,
    page_size: 12,
    ordering,
  })

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  const handleSortChange = (sort: string) => {
    setOrdering(sort)
    setCurrentPage(1)
  }

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
            onChangePage={handlePageChange}
            onSortChange={handleSortChange}
          />
          <TireInfoSection />
        </div>
      </div>
    </div>
  )
}

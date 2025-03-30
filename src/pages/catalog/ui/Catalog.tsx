import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { CatalogFilter } from 'widgets/catalog-filter'
import { CatalogProducts } from 'widgets/catalog-products'
import { TireInfoSection } from 'widgets/tireInfoSection'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { Title } from 'shared/ui/Text'

import { useGetProductsQuery } from '../api'

import s from './Catalog.module.scss'

export function Catalog() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('sorting') || ''

  const { isMobile } = useScreenWidth()

  const ordering = useMemo(() => category, [category])

  const { data } = useGetProductsQuery({
    page: currentPage,
    page_size: 12,
    ordering,
  })

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (category) {
      params.set('sorting', category)
    } else {
      params.delete('sorting')
    }
    setSearchParams(params, { replace: true }) 
  }, [category, setSearchParams])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  
  const handleSortChange = (sort: string) => {
    setSearchParams({ sorting: sort }) 
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

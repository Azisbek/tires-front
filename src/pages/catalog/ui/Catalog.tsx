import { useEffect } from 'react'

import { CatalogFilter } from 'widgets/catalog-filter'
import { CatalogProducts } from 'widgets/catalog-products'
import { TireInfoSection } from 'widgets/tireInfoSection'

import { Pagination } from 'features/pagination'

import { useCatalogProducts } from 'shared/hooks/useCatalogProducts'
import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { Title } from 'shared/ui/Text'

import { useGetFilterDataMutation } from '../api'

import s from './Catalog.module.scss'

export function Catalog() {
  const { isMobile } = useScreenWidth()
  const {
    data,
    isLoading,
    handlePageChange,
    handleSortChange,
    currentSort,
    refetch,
  } = useCatalogProducts()

  const [getFilterData, { data: filterResponse, isLoading: isLoadingFilters }] =
    useGetFilterDataMutation()

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        await getFilterData({}).unwrap()
      } catch (error) {
        console.error('Ошибка при получении фильтров:', error)
      }
    }

    fetchFilters()
  }, [])
  console.log(filterResponse)

  return (
    <div className={s.wrapper}>
      <Title
        className={s.title}
        size="xl-40"
      >
        Шины в Бишкеке
      </Title>
      <div className={s.container}>
        {!isMobile && (
          <CatalogFilter
            data={filterResponse?.filter_data}
            isLoading={isLoadingFilters}
            refetch={refetch}
            onApplyFilters={getFilterData}
          />
        )}
        <div className={s.content}>
          <CatalogProducts
            data={data}
            isLoading={isLoading}
            onSortChange={handleSortChange}
            currentSort={currentSort}
          />
          {data && (
            <Pagination
              meta={data}
              className={s.pagination}
              onPageChange={handlePageChange}
            />
          )}
          <TireInfoSection />
        </div>
      </div>
    </div>
  )
}

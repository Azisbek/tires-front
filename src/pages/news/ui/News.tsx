import { useState } from 'react'

import { NewsListWithSkeleton } from 'widgets/promotionList'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Title } from 'shared/ui/Text'

import { useGetNewsQuery } from '../api'

import s from './News.module.scss'

export function News() {
  const [limit, setLimit] = useState(9)

  const { data, isLoading } = useGetNewsQuery(
    { limit },
    { refetchOnMountOrArgChange: false },
  )

  const handleShowMore = () => {
    setLimit((prev) => prev + 6)
  }

  return (
    <div className={s.container}>
      <Title
        size="xl-40"
        color="black"
        className={s.title}
      >
        Новости и статьи
      </Title>

      <NewsListWithSkeleton
        data={data?.results || []}
        isLoading={isLoading}
      />

      {data?.next && (
        <AppButton
          className={s.btn}
          variant="border"
          onClick={handleShowMore}
        >
          Показать ещё
        </AppButton>
      )}
    </div>
  )
}

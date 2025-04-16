import clsx from 'clsx'

import React from 'react'

import { ProductListResponse } from 'shared/types/CatalogpageTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './Pagination.module.scss'

interface PaginationProps {
  meta: ProductListResponse
  onPageChange: (page: number) => void
  className: string
}

export const Pagination: React.FC<PaginationProps> = ({
  meta,
  onPageChange,
  className,
}) => {
  const {
    current_page,
    total_pages,
    previous_page,
    next_page,
    has_next,
    has_previous,
  } = meta

  if (total_pages === 1) {
    return <></>
  }

  const getPaginationButtons = () => {
    let pages: (number | string)[] = []

    if (total_pages <= 5) {
      for (let i = 1; i <= total_pages; i++) {
        pages.push(i)
      }
    } else {
      if (current_page <= 3) {
        pages = [1, 2, 3, 4, '...', total_pages]
      } else if (current_page >= total_pages - 2) {
        pages = [
          1,
          '...',
          total_pages - 3,
          total_pages - 2,
          total_pages - 1,
          total_pages,
        ]
      } else {
        pages = [
          1,
          '...',
          current_page - 2,
          current_page - 1,
          current_page,
          current_page + 1,
          current_page + 2,
          '...',
          total_pages,
        ]
      }
    }

    return pages
  }

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page)
    }
  }

  return (
    <div className={clsx(className, s.container)}>
      {has_previous && (
        <AppButton
          className={s.arrows}
          variant="border"
          onClick={() => onPageChange(previous_page!)}
        >
          Назад
        </AppButton>
      )}
      <div>
        {getPaginationButtons().map((page, index) => (
          <AppButton
            key={typeof page === 'number' ? page : `ellipsis-${index}`}
            variant="border"
            onClick={() => handlePageClick(page)}
            className={s.blueText}
          >
            {page}
          </AppButton>
        ))}
      </div>
      {has_next && (
        <AppButton
          className={s.arrows}
          variant="border"
          onClick={() => onPageChange(next_page!)}
        >
          Дальше
        </AppButton>
      )}
    </div>
  )
}

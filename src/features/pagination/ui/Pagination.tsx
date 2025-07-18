import clsx from 'clsx'

import { ProductListResponse } from 'shared/types/CatalogpageTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './Pagination.module.scss'

interface PaginationProps {
  data: ProductListResponse
  onPageChange: (page: number) => void
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({
  data: {
    current_page,
    total_pages,
    previous_page,
    next_page,
    has_next,
    has_previous,
  },
  onPageChange,
  className,
}) => {
  if (total_pages <= 1) return null

  const pages = Array.from({ length: total_pages }, (_, i) => i + 1)

  const handleClick = (page: number) => {
    onPageChange(page)
  }

  return (
    <div className={clsx(s.container, className)}>
      {has_previous && (
        <AppButton
          className={s.arrows}
          variant="border"
          onClick={() => handleClick(previous_page!)}
        >
          Назад
        </AppButton>
      )}

      <div>
        {pages.map((page) => (
          <AppButton
            key={page}
            variant="border"
            onClick={() => handleClick(page)}
            className={clsx(s.blueText, current_page === page && s.active)}
          >
            {page}
          </AppButton>
        ))}
      </div>

      {has_next && (
        <AppButton
          className={s.arrows}
          variant="border"
          onClick={() => handleClick(next_page!)}
        >
          Дальше
        </AppButton>
      )}
    </div>
  )
}

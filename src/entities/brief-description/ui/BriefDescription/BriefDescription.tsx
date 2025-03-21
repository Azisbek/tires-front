import { Link } from 'react-router-dom'

import { descriptionTypesProps } from 'entities/brief-description/types/types'

import { ProductSpecs } from 'shared/ui/ProductSpecs'
import { Title } from 'shared/ui/Text'

import s from './BriefDescription.module.scss'

export function BriefDescription({ data }: descriptionTypesProps) {
  return (
    <div className={s.container}>
      <Title
        className={s.title}
        size="sm-18"
      >
        Краткое описание
      </Title>

      <ProductSpecs specs={data} />

      <Link
        className={s.link}
        to={`#`}
      >
        Перейти ко всем характеристикам
      </Link>
    </div>
  )
}

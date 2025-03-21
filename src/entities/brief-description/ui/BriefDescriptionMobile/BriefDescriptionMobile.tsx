import { descriptionTypesProps } from 'entities/brief-description/types/types'

import { ProductSpecs } from 'shared/ui/ProductSpecs'
import { Title } from 'shared/ui/Text'

import s from './BriefDescriptionMobile.module.scss'

export function BriefDescriptionMobile({ data }: descriptionTypesProps) {
  return (
    <div className={s.container}>
      <Title
        className={s.title}
        size="sm-18"
      >
        Краткое описание
      </Title>

      <ProductSpecs
        specs={data}
        color="white"
      />
    </div>
  )
}
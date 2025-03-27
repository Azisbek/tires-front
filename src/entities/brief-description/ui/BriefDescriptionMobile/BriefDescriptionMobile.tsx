import { Characteristic } from 'shared/types/ProductDetailsTypes'
import { ProductSpecs } from 'shared/ui/ProductSpecs'
import { Title } from 'shared/ui/Text'

import s from './BriefDescriptionMobile.module.scss'

interface Props {
  data: Characteristic
}

export function BriefDescriptionMobile({ data }: Props) {
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

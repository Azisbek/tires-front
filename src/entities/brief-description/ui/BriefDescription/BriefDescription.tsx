import { Link } from 'react-router-dom'

import { Characteristic } from 'shared/types/ProductDetailsTypes'
import { ProductSpecs } from 'shared/ui/ProductSpecs'
import { Title } from 'shared/ui/Text'

import s from './BriefDescription.module.scss'

interface Props {
  data: Characteristic
}

export function BriefDescription({ data }: Props) {
  return (
    <div className={s.container}>
      <Title
        className={s.title}
        size="sm-18"
      >
        Краткое описание
      </Title>

      <ProductSpecs
        color="dark"
        specs={data}
      />

      <Link
        className={s.link}
        to={`./specs`}
      >
        Перейти ко всем характеристикам
      </Link>
    </div>
  )
}

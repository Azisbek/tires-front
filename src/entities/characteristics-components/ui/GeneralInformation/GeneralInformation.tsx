import { useOutletContext } from 'react-router-dom'

import { ProductDetailsTypes } from 'shared/types/ProductDetailsTypes'
import { Text, Title } from 'shared/ui/Text'

import s from './GeneralInformation.module.scss'

export function GeneralInformation() {
  const data = useOutletContext<ProductDetailsTypes>()

  return (
    <div className={s.generalInfo}>
      <Title>Описание</Title>
      <Text>{data.model_description}</Text>
    </div>
  )
}

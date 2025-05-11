import { Characteristic } from 'shared/types/ProductDetailsTypes'

import { SpecItem } from '../SpecItem/SpecItem'

import s from './ProductSpecs.module.scss'

interface Props {
  specs: Characteristic
  color: 'white' | 'dark'
}

export function ProductSpecs({ specs, color }: Props) {
  if (!specs) return <p>У данного товара нет характеристик</p>

  return (
    <div className={s.productSpecs}>
      <SpecItem
        label="Производитель"
        value={specs.manufacturer}
        color={color}
      />
      <SpecItem
        label="Модель"
        value={specs.model}
        color={color}
      />
      <SpecItem
        label="Производитель"
        value={specs.manufacturer}
        color={color}
      />
      <SpecItem
        label="Сезонность"
        value={specs.season}
        color={color}
      />
      <SpecItem
        label="Ширина"
        value={specs.width}
        color={color}
      />
      <SpecItem
        label="Профиль"
        value={specs.profile}
        color={color}
      />
      <SpecItem
        label="Профиль"
        value={specs.diameter}
        color={color}
      />
      <SpecItem
        label="Индекс скорости"
        value={specs.speed_index}
        color={color}
      />
      <SpecItem
        label="Индекс нагрузки"
        value={specs.load_index}
        color={color}
      />
      <SpecItem
        label="Индекс нагрузки для сдвоенных"
        value={specs.load_index_for_double}
        color={color}
      />
    </div>
  )
}

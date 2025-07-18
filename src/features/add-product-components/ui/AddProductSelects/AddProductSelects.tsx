import { setField } from 'pages/add-product-page/model/add-product.slice'
import { AddProductState } from 'pages/add-product-page/model/types'

import {
  seasonsOptions,
  speedIndexOptions,
} from 'features/add-product-components/model/constants'

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks'
import { InputSelect } from 'shared/ui/input-components'

import s from './AddProductSelects.module.scss'

interface SelectItem {
  label: string
  value: string
}

interface Props {
  tireType: SelectItem[]
  bodyType: SelectItem[]
}

export function AddProductSelects({ tireType, bodyType }: Props) {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.addProduct)
  console.log(state)

  const handleSelect =
    (field: keyof AddProductState) => (value: string | number) => {
      dispatch(setField({ field, value: String(value) }))
    }

  return (
    <div className={s.selects}>
      <div className={s.select}>
        <p className={s.label}>Топливная эффективность</p>
        <InputSelect
          color="grey"
          options={['A', 'B', 'C', 'D', 'E', 'F', 'G']}
          defaultValue="Все"
          onChange={handleSelect('fuel_efficiency')}
        />
      </div>

      <div className={s.select}>
        <p className={s.label}>Сцепление на мокрой поверхности</p>
        <InputSelect
          color="grey"
          options={['A', 'B', 'C', 'D', 'E', 'F']}
          defaultValue="Все"
          onChange={handleSelect('wet_grip')}
        />
      </div>

      <div className={s.select}>
        <p className={s.label}>Индекс скорости</p>
        <InputSelect
          color="grey"
          options={speedIndexOptions}
          defaultValue="Все"
          onChange={handleSelect('speed_index')}
        />
      </div>

      <div className={s.select}>
        <p className={s.label}>Сезон</p>
        <InputSelect
          color="grey"
          options={seasonsOptions.map((item) => ({
            label: item.label,
            value: item.value,
          }))}
          defaultValue="Все"
          onChange={handleSelect('season')}
        />
      </div>

      <div className={s.select}>
        <p className={s.label}>Тип шины</p>
        <InputSelect
          color="grey"
          options={tireType.map((item) => ({
            label: item.label,
            value: item.value,
          }))}
          defaultValue="Все"
          onChange={handleSelect('tire_type')}
        />
      </div>

      <div className={s.select}>
        <p className={s.label}>Тип кузова</p>
        <InputSelect
          color="grey"
          options={bodyType.map((item) => ({
            label: item.label,
            value: item.value,
          }))}
          defaultValue="Все"
          onChange={handleSelect('body_type')}
        />
      </div>
    </div>
  )
}

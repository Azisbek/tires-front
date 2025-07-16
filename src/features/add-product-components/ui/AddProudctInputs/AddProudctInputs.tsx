import { setField } from 'pages/add-product-page/model/add-product.slice'

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks'
import { Input } from 'shared/ui/input-components'

import s from './AddProudctInputs.module.scss'

export function AddProudctInputs() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.addProduct)

  const handleChange =
    (field: keyof typeof state) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setField({ field, value: e.target.value }))
    }

  return (
    <div className={s.inputs}>
      <div className={s.input}>
        <p className={s.label}>Названия</p>
        <Input
          value={state.title}
          onChange={handleChange('title')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Производитель</p>
        <Input
          value={state.manufacturer}
          onChange={handleChange('manufacturer')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Модель</p>
        <Input
          value={state.model}
          onChange={handleChange('model')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Модификация</p>
        <Input
          value={state.modification}
          onChange={handleChange('modification')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Поколение</p>
        <Input
          value={state.generation}
          onChange={handleChange('generation')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Описания модели</p>
        <Input
          value={state.model_description}
          onChange={handleChange('model_description')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Диаметр</p>
        <Input
          value={state.diameter}
          onChange={handleChange('diameter')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Ширина</p>
        <Input
          value={state.width}
          onChange={handleChange('width')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Профиль</p>
        <Input
          value={state.profile}
          onChange={handleChange('profile')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Индекс нагрузки</p>
        <Input
          value={state.load_index}
          onChange={handleChange('load_index')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Индекс нагрузки для сдвоенных</p>
        <Input
          value={state.load_index_for_double}
          onChange={handleChange('load_index_for_double')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Уровень внешного шума</p>
        <Input
          value={state.external_noise_level.toString()}
          onChange={(e) =>
            dispatch(
              setField({
                field: 'external_noise_level',
                value: +e.target.value,
              }),
            )
          }
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Гарантия</p>
        <Input
          value={state.warranty}
          onChange={handleChange('warranty')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>В наличии</p>
        <Input
          value={state.in_stock.toString()}
          onChange={(e) =>
            dispatch(setField({ field: 'in_stock', value: +e.target.value }))
          }
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Цена</p>
        <Input
          value={state.price}
          onChange={handleChange('price')}
        />
      </div>

      <div className={s.input}>
        <p className={s.label}>Скидка</p>
        <Input
          value={state.promotion}
          onChange={handleChange('promotion')}
        />
      </div>
    </div>
  )
}

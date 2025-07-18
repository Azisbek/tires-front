import { setField } from 'pages/add-product-page/model/add-product.slice'

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks'
import { Checkbox } from 'shared/ui/Checkbox'

import s from './AddProductCheckboxes.module.scss'

export function AddProductCheckboxes() {
  const dispatch = useAppDispatch()
  const { negotiable, runflat, off_road, condition } = useAppSelector(
    (state) => state.addProduct,
  )

  const handleToggle = (
    field: 'negotiable' | 'runflat' | 'off_road' | 'condition',
  ) => {
    dispatch(setField({ field, value: !storeFields[field] }))
  }

  const storeFields = { negotiable, runflat, off_road, condition }

  return (
    <div className={s.checkboxes}>
      <div className={s.block}>
        <p className={s.label}>Договорная</p>
        <Checkbox
          onClick={() => handleToggle('negotiable')}
          checked={negotiable}
          color="orange"
        >
          Да
        </Checkbox>
      </div>

      <div className={s.block}>
        <p className={s.label}>Runflat</p>
        <Checkbox
          onClick={() => handleToggle('runflat')}
          checked={runflat}
          color="orange"
        >
          Да
        </Checkbox>
      </div>

      <div className={s.block}>
        <p className={s.label}>OffRoad</p>
        <Checkbox
          onClick={() => handleToggle('off_road')}
          checked={off_road}
          color="orange"
        >
          Да
        </Checkbox>
      </div>

      <div className={s.block}>
        <p className={s.label}>Новое</p>
        <Checkbox
          onClick={() => handleToggle('condition')}
          checked={condition}
          color="orange"
        >
          Да
        </Checkbox>
      </div>
    </div>
  )
}

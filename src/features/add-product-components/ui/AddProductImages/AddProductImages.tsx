import { setField } from 'pages/add-product-page/model/add-product.slice'
import { AddProductState } from 'pages/add-product-page/model/types'

import { ImageUpload } from 'features/add-product-components'

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks'

import s from './AddProductImages.module.scss'

export const GALLERY_FIELDS: (keyof AddProductState)[] = [
  'image2',
  'image3',
  'image4',
  'image5',
  'image6',
  'image7',
]

export function AddProductImages() {
  const dispatch = useAppDispatch()
  const addProductState = useAppSelector((state) => state.addProduct)
  const { image1 } = addProductState

  const handleImageChange = (
    field: keyof AddProductState,
    file: File | null,
  ) => {
    dispatch(setField({ field, value: file }))
  }

  return (
    <div className={s.images}>
      <div className={s.block}>
        <label className={s.label}>Фото шины</label>
        <span className={s.addText}>+Добавить изображение</span>
        <ImageUpload
          width={315}
          height={258}
          field="image1"
          value={image1}
          onChange={handleImageChange}
        />
      </div>

      <div className={s.block}>
        <label className={s.label}>Галерея</label>
        <span className={s.addText}>+Добавить изображение</span>

        <div className={s.galaryList}>
          {GALLERY_FIELDS.map((field) => (
            <ImageUpload
              width={120}
              height={100}
              key={field}
              field={field}
              value={addProductState[field] as File | null}
              onChange={handleImageChange}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

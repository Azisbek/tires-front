import { useState } from 'react'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Modal } from 'shared/ui/Modal'
import {
  AdminCheckbox,
  AdminInputBlock,
  AdminSelectBlock,
  ImageUploader,
} from 'shared/ui/admin-components'

import s from './AddProducts.module.scss'
import { useCreateProductMutation } from './api'
import { validateProductForm } from './model/validateProductForm'

const selectValue = {
  tire_type: ['Легковые', 'Легкогрузовой (LTR)', 'Внедорожник (SUV)'],
  season: ['Зима', 'Лето', 'Всесезонные'],
  speedIndex: ['Q', 'R', 'S', 'T', 'H', 'V', 'W', 'Y', 'Z'],
  efficiency: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  wetGrip: ['A', 'B', 'C', 'D', 'E', 'F'],
  body_type: ['Седан', 'Купе'],
}

export function AddProducts() {
  const [createProduct] = useCreateProductMutation()
  const [isOpen, setIsOpen] = useState(false)

  const [form, setForm] = useState({
    title: '',
    price: '',
    negotiable: false,
    promotion: '',
    promotion_end_date: '',
    model_description: '',
    in_stock: 0,
    profile: '',
    diameter: '',
    speed_index: '',
    load_index: '',
    load_index_for_double: '',
    manufacturer: '',
    model: '',
    generation: '',
    modification: '',
    promotionCategory: '',
    width: '',
    fuel_efficiency: '',
    wet_grip: '',
    external_noise_level: 0,
    condition: 0,
    season: null,
    tire_type: 0,
    body_type: 0,
    runflat: false,
    off_road: false,
    warranty: '',
    image1: null as File | null,
    image2: null as File | null,
    image3: null as File | null,
    image4: null as File | null,
    image5: null as File | null,
    image6: null as File | null,
    image7: null as File | null,
  })
  const [error, setError] = useState<
    Partial<Record<keyof typeof form, string>>
  >({})

  const handleAddImages = (files: File[]) => {
    setForm((prev) => {
      const updatedImages = { ...prev }
      let fileIdx = 0

      for (let i = 1; i <= 7 && fileIdx < files.length; i++) {
        const key = `image${i}` as `image${1 | 2 | 3 | 4 | 5 | 6 | 7}`
        if (updatedImages[key] === null) {
          updatedImages[key] = files[fileIdx]
          fileIdx++
        }
      }

      return updatedImages
    })
  }

  const handleRemoveImage = (index: number) => {
    setForm((prev) => {
      const updatedImages = { ...prev }
      const key = `image${index + 1}` as `image${1 | 2 | 3 | 4 | 5 | 6 | 7}`

      updatedImages[key] = null

      return updatedImages
    })
  }
  const handleReplaceImage = (index: number, file: File) => {
    setForm((prev) => {
      const updatedImages = { ...prev }
      const key = `image${index + 1}` as `image${1 | 2 | 3 | 4 | 5 | 6 | 7}`
      updatedImages[key] = file

      return updatedImages
    })
  }

  const selectChange = (filterKey: string, value: string) => {
    if (
      filterKey === 'tire_type' ||
      filterKey === 'season' ||
      filterKey === 'body_type'
    ) {
      const index = selectValue[filterKey].findIndex((el) => el === value)

      if (index !== -1) {
        setForm((prev) => ({ ...prev, [filterKey]: index + 1 }))
      }
    } else {
      setForm((prev) => ({ ...prev, [filterKey]: value }))
    }
  }

  const handleInputChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, type, checked } = e.target
      setForm((prev) => ({
        ...prev,
        [key]: type === 'checkbox' ? checked : value,
      }))
    }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors = validateProductForm(form)

    if (Object.keys(errors).length > 0) {
      setError(errors)
      return
    }

    setError({})

    const formData = new FormData()
    Object.keys(form).forEach((key) => {
      const typedKey = key as keyof typeof form

      const value = form[typedKey]

      if (typedKey.startsWith('image') && value instanceof File) {
        formData.append(typedKey, value)
      } else if (typeof value === 'boolean' || typeof value === 'number') {
        formData.append(typedKey, String(value))
      } else if (value !== null && value !== undefined) {
        formData.append(typedKey, String(value))
      }
    })

    try {
      await createProduct(formData)
      setIsOpen(true)
    } catch (error) {
      console.error('Неизвестная ошибка:', error)
    }
  }

  return (
    <div className={s.root}>
      <Modal
        className={s.successModal}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        Продукт успешно отправлено
      </Modal>
      <h1 className={s.title}>Добавить товар</h1>

      <form
        className={s.formWrapper}
        onSubmit={handleSubmit}
      >
        <div className={s.inputsGroup}>
          <AdminInputBlock
            label="Название шины*"
            value={form.title}
            onChange={handleInputChange('title')}
            error={error.title}
          />
          <AdminInputBlock
            label="Название модели*"
            value={form.model}
            onChange={handleInputChange('model')}
            error={error.model}
          />
          <AdminInputBlock
            label="Описание модели*"
            value={form.model_description}
            onChange={handleInputChange('model_description')}
            error={error.model_description}
          />
          <AdminInputBlock
            label="Модификация*"
            value={form.modification}
            onChange={handleInputChange('modification')}
            error={error.modification}
          />
          <AdminInputBlock
            label="Поколение*"
            value={form.generation}
            onChange={handleInputChange('generation')}
            error={error.generation}
          />
          <AdminInputBlock
            label="Ширина*"
            value={form.width}
            onChange={handleInputChange('width')}
            error={error.width}
          />
          <AdminInputBlock
            label="Профиль*"
            value={form.profile}
            onChange={handleInputChange('profile')}
            error={error.profile}
          />
          <AdminInputBlock
            label="Диаметр*"
            value={form.diameter}
            onChange={handleInputChange('diameter')}
            error={error.diameter}
          />

          <div className={s.flexGroup}>
            <AdminInputBlock
              label="Цена"
              type="number"
              disabled={form.negotiable}
              value={form.price}
              onChange={handleInputChange('price')}
              error={error.price}
            />
            <AdminInputBlock
              label="Скидка"
              type="number"
              disabled={form.negotiable}
              value={form.promotion}
              onChange={handleInputChange('promotion')}
              error={error.promotion}
            />
            <AdminCheckbox
              className={s.formLabelPosition}
              label="Договорная"
              checked={form.negotiable}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  negotiable: e.target.checked,
                  price: '',
                  promotion: '',
                  promotion_end_date: '',
                }))
              }
            />
          </div>

          {form.promotion && (
            <AdminInputBlock
              label="Дата окончания скидки*"
              type="date"
              value={form.promotion_end_date}
              onChange={handleInputChange('promotion_end_date')}
              error={error.promotion_end_date}
            />
          )}

          <AdminSelectBlock
            label="Тип шины*"
            options={selectValue.tire_type}
            error={error.tire_type}
            onChange={(value) => selectChange('tire_type', value)}
          />
          <AdminSelectBlock
            label="Тип кузова*"
            options={selectValue.body_type}
            error={error.body_type}
            onChange={(value) => selectChange('body_type', value)}
          />
          <AdminSelectBlock
            label="Сезонность*"
            options={selectValue.season}
            error={error.season}
            onChange={(value) => selectChange('season', value)}
          />
          <AdminInputBlock
            label="Производитель*"
            value={form.manufacturer}
            onChange={handleInputChange('manufacturer')}
            error={error.manufacturer}
          />

          <div className={s.flexGroup}>
            <AdminInputBlock
              label="Только новые"
              value={form.condition}
              type="number"
              onChange={handleInputChange('condition')}
              error={error.condition}
            />
            {/* <AdminCheckbox
              label="Только новые"
              checked={form.condition}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, condition: e.target.checked }))
              }
            /> */}
            <AdminCheckbox
              label="Runflat"
              checked={form.runflat}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, runflat: e.target.checked }))
              }
            />
            <AdminCheckbox
              label="Off-Road"
              checked={form.off_road}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, off_road: e.target.checked }))
              }
            />
          </div>

          <AdminSelectBlock
            label="Индекс скорости*"
            options={selectValue.speedIndex}
            error={error.speed_index}
            onChange={(value) => selectChange('speed_index', value)}
          />
          <div className={s.flexGroup}>
            <AdminInputBlock
              label="Индекс нагрузки*"
              value={form.load_index}
              onChange={handleInputChange('load_index')}
              error={error.load_index}
            />
            <AdminInputBlock
              label="Двойной индекс*"
              value={form.load_index_for_double}
              onChange={handleInputChange('load_index_for_double')}
              error={error.load_index_for_double}
            />
          </div>

          <AdminSelectBlock
            label="Топливная экономность*"
            options={selectValue.efficiency}
            error={error.fuel_efficiency}
            onChange={(value) => selectChange('fuel_efficiency', value)}
          />
          <AdminSelectBlock
            label="Сцепление с мокрой поверхностью*"
            options={selectValue.wetGrip}
            error={error.wet_grip}
            onChange={(value) => selectChange('wet_grip', value)}
          />

          <AdminInputBlock
            label="Уровень внешнего шума*"
            type="number"
            value={form.external_noise_level}
            onChange={handleInputChange('external_noise_level')}
            error={error.external_noise_level}
          />
          <AdminInputBlock
            label="В наличии"
            type="number"
            value={form.in_stock}
            onChange={handleInputChange('in_stock')}
            error={error.in_stock}
          />
        </div>

        <div className={s.inputsGroup}>
          <div className={s.inputBlock}>
            <ImageUploader
              images={[
                form.image1,
                form.image2,
                form.image3,
                form.image4,
                form.image5,
                form.image6,
                form.image7,
              ]}
              error={error.image1}
              onAddImages={handleAddImages}
              maxImages={6}
              onRemoveImage={handleRemoveImage}
              onReplaceImage={handleReplaceImage}
            />
          </div>

          <div className={s.inputBlock}>
            <AppButton
              className={s.buttonSubmit}
              variant="accent"
            >
              Сохранить
            </AppButton>
          </div>
          <div className={s.inputBlock}>
            <AppButton
              className={s.buttonSubmit}
              variant="white"
            >
              Сбросить
            </AppButton>
          </div>
        </div>
      </form>
    </div>
  )
}

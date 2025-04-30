import clsx from 'clsx'

import { useState } from 'react'

import { ImageUploader } from 'widgets/imageUploader'

// import { AddProductsType } from 'shared/types/AddProductTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Modal } from 'shared/ui/Modal'
import { Input, InputSelect } from 'shared/ui/input-components'

import s from './AddProducts.module.scss'
import { useCreateProductMutation } from './api'

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
    condition: 1,
    season: null,
    tire_type: null,
    body_type: null,
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

  const validateForm = () => {
    const newErrors: Partial<Record<keyof typeof form, string>> = {}

    const requiredFields: (keyof typeof form)[] = [
      'title',
      'in_stock',
      'profile',
      'promotion',
      'model_description',
      'generation',
      'diameter',
      'speed_index',
      'load_index',
      'load_index_for_double',
      'manufacturer',
      'model',
      'width',
      'fuel_efficiency',
      'wet_grip',
      'external_noise_level',
      'modification',
      // 'condition',
      'price',
      'season',
      'tire_type',
      'body_type',
      'image1',
    ]

    for (const key of requiredFields) {
      const value = form[key]

      if (key === 'promotion' && value !== '') {
        if (form.price === '') {
          newErrors[key] = 'Поле "Цена" обязательно при наличии акции'
        }
        if (form.promotion_end_date === '') {
          newErrors.promotion_end_date = 'Укажите дату окончания акции'
        }
      }

      if (key === 'image1' && value === null) {
        newErrors[key] = 'Это поле обязательно, нужно добавить изображение'
      } else if (typeof value === 'string') {
        if (value.trim() === '') {
          if (key !== 'price' && key !== 'promotion') {
            newErrors[key] = 'Это поле обязательно к заполнению.'
          } else if (key === 'price' && !form.negotiable) {
            newErrors[key] = 'Напишите цену (обязательно, если торг не выбран)'
          }
        }
        if (value.length > 100) {
          newErrors[key] = 'Максимальная длина строки 100.'
        }
      } else if (typeof value === 'number' && isNaN(value)) {
        newErrors[key] = 'Введите корректное число'
      }
    }

    return newErrors
  }

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
        setForm((prev) => ({ ...prev, [filterKey]: index }))
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
    const errors = validateForm()
    console.log(errors)

    if (Object.keys(errors).length > 0) {
      setError(errors)
      return
    }

    setError({})

    // Формируем FormData
    const formData = new FormData()
    Object.keys(form).forEach((key) => {
      // Приводим ключ к типу keyof typeof form, чтобы TypeScript знал, что это ключи формы
      const typedKey = key as keyof typeof form

      const value = form[typedKey]

      console.log(typedKey.startsWith('image') && value instanceof File)
      if (typedKey.startsWith('image') && value instanceof File) {
        formData.append(typedKey, value)
      } else if (typeof value === 'boolean' || typeof value === 'number') {
        formData.append(typedKey, String(value))
      } else if (value !== null && value !== undefined) {
        formData.append(typedKey, String(value))
      }
    })

    // return formData
    console.log(formData)

    try {
      await createProduct(formData) // приведение нужно, т.к. тип мутации может ожидать другой формат
      setIsOpen((prev) => !prev)
      console.log('Продукт успешно добавлен')
    } catch (error) {
      console.error('Ошибка при добавлении продукта:', error)
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
          <div className={s.inputBlock}>
            <label>Название шины*</label>

            <Input
              className={s.input}
              value={form.title}
              onChange={handleInputChange('title')}
            />
            {error.title && <p className={s.error}>{error.title}</p>}
          </div>

          <div className={s.inputBlock}>
            <label>Название модели*</label>

            <Input
              className={s.input}
              value={form.model}
              onChange={handleInputChange('model')}
            />
            {error.model && <p className={s.error}>{error.model}</p>}
          </div>
          <div className={s.inputBlock}>
            <label>Описание модели*</label>

            <Input
              className={s.input}
              value={form.model_description}
              onChange={handleInputChange('model_description')}
            />
            {error.model_description && (
              <p className={s.error}>{error.model_description}</p>
            )}
          </div>
          <div className={s.inputBlock}>
            <label>Модификация*</label>

            <Input
              className={s.input}
              value={form.modification}
              onChange={handleInputChange('modification')}
            />
            {error.modification && (
              <p className={s.error}>{error.modification}</p>
            )}
          </div>
          <div className={s.inputBlock}>
            <label>Поколение*</label>

            <Input
              className={s.input}
              value={form.generation}
              onChange={handleInputChange('generation')}
            />
            {error.generation && <p className={s.error}>{error.generation}</p>}
          </div>
          <div className={s.inputBlock}>
            <label>Ширина*</label>

            <Input
              className={s.input}
              value={form.width}
              onChange={handleInputChange('width')}
            />
            {error.width && <p className={s.error}>{error.width}</p>}
          </div>

          <div className={s.inputBlock}>
            <label>Профиль*</label>

            <Input
              className={s.input}
              value={form.profile}
              onChange={handleInputChange('profile')}
            />
            {error.profile && <p className={s.error}>{error.profile}</p>}
          </div>

          <div className={s.inputBlock}>
            <label>Диаметр*</label>

            <Input
              className={s.input}
              value={form.diameter}
              onChange={handleInputChange('diameter')}
            />
            {error.diameter && <p className={s.error}>{error.diameter}</p>}
          </div>

          <div className={s.flexGroup}>
            <div className={s.inputBlock}>
              <label className={clsx(s.formLabelPosition, s.checkbox)}>
                <input
                  type="checkbox"
                  checked={form.negotiable}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      negotiable: e.target.checked,
                    }))
                  }
                />
                Договорная
              </label>
              <label>Цена</label>

              <Input
                disabled={form.negotiable}
                className={s.input}
                type="number"
                value={form.price}
                onChange={handleInputChange('price')}
              />
              {error.price && <p className={s.error}>{error.price}</p>}
            </div>

            <div className={s.inputBlock}>
              <label>Скидка</label>

              <Input
                disabled={form.negotiable}
                className={s.input}
                type="number"
                value={form.promotion}
                onChange={handleInputChange('promotion')}
              />
            </div>
          </div>
          {form.promotion && (
            <div className={s.inputBlock}>
              <label>Дата окончания скидки*</label>
              <Input
                className={s.input}
                type="date"
                value={form.promotion_end_date}
                onChange={handleInputChange('promotion_end_date')}
              />
              {error.promotion_end_date && (
                <p className={s.error}>{error.promotion_end_date}</p>
              )}
            </div>
          )}
          <div className={s.inputBlock}>
            <label>Тип шины*</label>
            <InputSelect
              color="darkGrey"
              options={selectValue.tire_type}
              defaultValue="Выберите тип шины"
              onChange={(value: string) => selectChange('tire_type', value)}
            />
            {error.tire_type && <p className={s.error}>{error.tire_type}</p>}
          </div>
          <div className={s.inputBlock}>
            <label>Тип кузова*</label>
            <InputSelect
              color="darkGrey"
              options={selectValue.body_type}
              defaultValue="Выберите тип шины"
              onChange={(value: string) => selectChange('body_type', value)}
            />
            {error.body_type && <p className={s.error}>{error.body_type}</p>}
          </div>
          <div className={s.inputBlock}>
            <label>Сезонность*</label>
            <InputSelect
              color="darkGrey"
              options={[...selectValue.season]}
              defaultValue="Выберите cезонность"
              onChange={(value: string) => selectChange('season', value)}
            />
            {error.season && <p className={s.error}>{error.season}</p>}
          </div>
          <div className={s.inputBlock}>
            <label>Производитель*</label>
            <Input
              className={s.input}
              value={form.manufacturer}
              onChange={handleInputChange('manufacturer')}
            />
            {error.manufacturer && (
              <p className={s.error}>{error.manufacturer}</p>
            )}
          </div>

          <div className={s.flexGroup}>
            {/* <label className={s.checkbox}>
              <input
                type="checkbox"
                checked={form.condition}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    condition: e.target.checked,
                  }))
                }
              />
              Состояние (Только новые)
            </label> */}
            <label className={s.checkbox}>
              <input
                type="checkbox"
                checked={form.runflat}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    runflat: e.target.checked,
                  }))
                }
              />
              Runflat
            </label>
            <label className={s.checkbox}>
              <input
                type="checkbox"
                checked={form.off_road}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    off_road: e.target.checked,
                  }))
                }
              />
              Off-Road
            </label>
          </div>
          <div className={s.inputBlock}>
            <label>Индекс скорости*</label>
            <InputSelect
              color="darkGrey"
              options={selectValue.speedIndex}
              defaultValue="Выберите индекс скорости"
              onChange={(value: string) => selectChange('speed_index', value)}
            />
            {error.speed_index && (
              <p className={s.error}>{error.speed_index}</p>
            )}
          </div>
          <div className={s.inputBlock}>
            <label>Индекс нагрузки*</label>
            <div className={s.flexGroup}>
              <div>
                <Input
                  placeholder="От"
                  className={s.input}
                  value={form.load_index}
                  onChange={handleInputChange('load_index')}
                />
                {error.load_index && (
                  <p className={s.error}>{error.load_index}</p>
                )}
              </div>
              <div>
                <Input
                  className={s.input}
                  placeholder="До"
                  value={form.load_index_for_double}
                  onChange={handleInputChange('load_index_for_double')}
                />
                {error.load_index_for_double && (
                  <p className={s.error}>{error.load_index_for_double}</p>
                )}
              </div>
            </div>
          </div>
          <div className={s.inputBlock}>
            <label>Топливная экономность*</label>
            <InputSelect
              color="darkGrey"
              options={selectValue.efficiency}
              defaultValue="Выберите топливную экономность"
              onChange={(value: string) =>
                selectChange('fuel_efficiency', value)
              }
            />
            {error.fuel_efficiency && (
              <p className={s.error}>{error.fuel_efficiency}</p>
            )}
          </div>
          <div className={s.inputBlock}>
            <label>Сцепление с мокрой поверхностью*</label>
            <InputSelect
              color="darkGrey"
              options={selectValue.wetGrip}
              defaultValue="Выберите цепление с мокрой поверхностью"
              onChange={(value: string) => selectChange('wet_grip', value)}
            />
            {error.wet_grip && <p className={s.error}>{error.wet_grip}</p>}
          </div>
          <div className={s.inputBlock}>
            <label>Уровень внешнего шума*</label>
            <Input
              placeholder="От"
              className={s.input}
              type="number"
              value={form.external_noise_level}
              onChange={handleInputChange('external_noise_level')}
            />
            {error.external_noise_level && (
              <p className={s.error}>{error.external_noise_level}</p>
            )}
          </div>
          <div className={s.inputBlock}>
            <label>В наличии</label>
            <Input
              placeholder="От"
              className={s.input}
              type="number"
              value={form.in_stock}
              onChange={handleInputChange('in_stock')}
            />
          </div>

          <div className={s.flexGroup}>
            <label className={s.checkbox}>
              <input
                type="checkbox"
                // checked={}
                // onChange={() => onChange(!checked)}
              />
              Комплект
            </label>
          </div>
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

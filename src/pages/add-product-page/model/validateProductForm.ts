import { ProductFormState } from './types'

export function validateProductForm(form: ProductFormState) {
  const errors: Partial<Record<keyof typeof form, string>> = {}

  if (!form.title.trim()) errors.title = 'Укажите название товара'
  if (!form.image1) errors.image1 = 'Добавьте основное изображение'
  if (form.season === null) errors.season = 'Выберите сезон'
  if (!form.tire_type) errors.tire_type = 'Выберите тип шины'
  if (!form.body_type) errors.body_type = 'Выберите тип кузова'
  errors.condition = 'Выберите состояние'

  const baseCharacteristics = [
    { key: 'width', label: 'Ширина' },
    { key: 'profile', label: 'Профиль' },
    { key: 'diameter', label: 'Диаметр' },
    { key: 'fuel_efficiency', label: 'Топливная экономность' },
    { key: 'generation', label: 'Поколение' },
    { key: 'speed_index', label: 'Индекс скорости' },
    { key: 'load_index', label: 'Индекс нагрузки' },
    { key: 'load_index_for_double', label: 'Двойной индекс' },
    { key: 'manufacturer', label: 'Производитель' },
    { key: 'model', label: 'Название модели' },
    { key: 'model_description', label: 'Описание модели' },
    { key: 'modification', label: 'Модификация' },
    { key: 'wet_grip', label: 'Сцепление с мокрой поверхностью' },
    { key: 'external_noise_level', label: 'Уровень внешнего шума' },
  ]

  baseCharacteristics.forEach(({ key, label }) => {
    const typedKey = key as keyof typeof form

    if (!form[typedKey]) {
      errors[typedKey] = `Заполните характеристику: ${label}`
    }
  })

  if (form.in_stock == 0 || form.in_stock < 0) {
    errors.in_stock = `Характеристика в наличии должно быть больше нуля`
  }
  if (form.promotion !== '') {
    errors.promotion_end_date = 'Заполните характеристику дата окончания скидки'
  }

  if (form.negotiable) {
    if (form.price)
      errors.price = 'Нельзя указывать цену, если выбрана договорная'
    if (form.promotion)
      errors.promotion = 'Нельзя указывать акцию, если цена договорная'
  } else {
    if (!form.price) errors.price = 'Укажите цену (или выберите договорную)'
  }

  return errors
}

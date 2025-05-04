import { useState } from 'react'

import {
  useCreateProductMutation,
  useGetBodyTypeQuery,
  useGetTireTypeQuery,
} from '../api'
import { validateProductForm } from '../model/validateProductForm'

const selectValue = {
  season: ['Зима', 'Лето', 'Всесезонные'],
  efficiency: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  wetGrip: ['A', 'B', 'C', 'D', 'E', 'F'],
}

export function useAddProductForm() {
  const [createProduct, { data }] = useCreateProductMutation()
  const { data: TireTypeData } = useGetTireTypeQuery()
  const { data: BodyTypeData } = useGetBodyTypeQuery()
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
    season: 0,
    tire_type: '',
    body_type: '',
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

  // Обработчики для формы
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
    const mappedData: Record<
      string,
      { label: string; value: string }[] | undefined
    > = {
      tire_type: TireTypeData,
      body_type: BodyTypeData,
    }

    if (filterKey === 'season') {
      const index = selectValue[filterKey].findIndex((el) => el === value)
      if (index !== -1) {
        setForm((prev) => ({ ...prev, season: index + 1 }))
      }
      return
    }

    if (mappedData[filterKey]) {
      const currentValue = mappedData[filterKey]?.find(
        (el) => el.label === value,
      )
      setForm((prev) => ({ ...prev, [filterKey]: currentValue?.value || '' }))
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

  return {
    form,
    setForm,
    TireTypeData,
    BodyTypeData,
    selectValue,
    error,
    setError,
    isOpen,
    setIsOpen,
    handleAddImages,
    handleRemoveImage,
    handleReplaceImage,
    selectChange,
    handleInputChange,
    handleSubmit,
    data,
  }
}

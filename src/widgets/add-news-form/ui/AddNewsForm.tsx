import { FormEvent, useState } from 'react'

import { AddNewsTypes, errorTypes } from 'pages/add-news/ui/AddNews'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Space } from 'shared/ui/Space/Space'
import { ImageUploader } from 'shared/ui/admin-components/ui/imageUploader/ImageUploader'

import s from './AddnewsForm.module.scss'

interface Props {
  onSubmit: (data: AddNewsTypes) => void
  errors?: Partial<errorTypes>
}

export function AddNewsForm({ onSubmit, errors }: Props) {
  const [formData, setFormData] = useState<AddNewsTypes>({
    news_title: '',
    news_description: '',
    news_image1: null as File | null,
    news_image2: null as File | null,
    news_image3: null as File | null,
    news_image4: null as File | null,
    news_image5: null as File | null,
    news_image6: null as File | null,
    news_image7: null as File | null,
  })

  const [errorImg, setErrorImg] = useState<string>('')

  const handleChange = <K extends keyof AddNewsTypes>(
    name: K,
    value: AddNewsTypes[K],
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddImages = (files: File[]) => {
    setFormData((prev) => {
      const updatedImages = { ...prev }
      let fileIdx = 0

      for (let i = 1; i <= 7 && fileIdx < files.length; i++) {
        const key = `news_image${i}` as `news_image${1 | 2 | 3 | 4 | 5 | 6 | 7}`
        if (updatedImages[key] === null) {
          updatedImages[key] = files[fileIdx]
          fileIdx++
        }
      }

      return updatedImages
    })
  }

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => {
      const updatedImages = { ...prev }
      const key =
        `news_image${index + 1}` as `news_image${1 | 2 | 3 | 4 | 5 | 6 | 7}`

      updatedImages[key] = null

      return updatedImages
    })
  }

  const handleReplaceImage = (index: number, file: File) => {
    setFormData((prev) => {
      const updatedImages = { ...prev }
      const key =
        `news_image${index + 1}` as `news_image${1 | 2 | 3 | 4 | 5 | 6 | 7}`
      updatedImages[key] = file

      return updatedImages
    })
  }

  const resetForm = () => {
    setFormData({
      news_title: '',
      news_description: '',
      news_image1: null as File | null,
      news_image2: null as File | null,
      news_image3: null as File | null,
      news_image4: null as File | null,
      news_image5: null as File | null,
      news_image6: null as File | null,
      news_image7: null as File | null,
    })
    setErrorImg('')
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.news_image1 === null) {
      setErrorImg('Добавьте основное изображение')
      return
    }
    onSubmit?.(formData)

    console.log(formData)
    resetForm()
  }

  return (
    <>
      <p className={s.title}>Добавить новость</p>
      <Space h={90} />

      <form onSubmit={submitHandler}>
        <div className={s.data}>
          <label>Заголовок</label>
          {errors?.news_title && (
            <span className={s.error}>{errors.news_title}</span>
          )}
          <input
            value={formData.news_title}
            type="text"
            onChange={(e) => handleChange('news_title', e.target.value)}
          />

          <label>Введите текст</label>
          {errors?.news_description && (
            <span className={s.error}>{errors.news_description}</span>
          )}
          <textarea
            value={formData.news_description}
            onChange={(e) => handleChange('news_description', e.target.value)}
          />
        </div>

        <div className={s.images}>
          <ImageUploader
            images={[
              formData.news_image1,
              formData.news_image2,
              formData.news_image3,
              formData.news_image4,
              formData.news_image5,
              formData.news_image6,
              formData.news_image7,
            ]}
            error={errorImg}
            onAddImages={handleAddImages}
            maxImages={7}
            onRemoveImage={handleRemoveImage}
            onReplaceImage={handleReplaceImage}
          />

          <Space h={70} />

          <AppButton
            variant="accent"
            type="submit"
          >
            Сохранить
          </AppButton>
          <AppButton
            variant="border"
            type="button"
            onClick={resetForm}
          >
            Сбросить
          </AppButton>
        </div>
      </form>
    </>
  )
}

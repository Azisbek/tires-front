import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { AddNewsForm } from 'widgets/add-news-form'

import { useValidation } from 'shared/hooks/useValidation'
import { LoaderFullScreen } from 'shared/ui/loader-components'

import { useAddNewsMutation } from '../api'

import s from './AddNews.module.scss'

export interface AddNewsTypes {
  news_title: string
  news_description: string
  news_image1: File | null
  news_image2: File | null
  news_image3: File | null
  news_image4: File | null
  news_image5: File | null
  news_image6: File | null
  news_image7: File | null
}
export interface errorTypes {
  news_title: string
  news_description: string
  news_image: string
}

export function AddNews() {
  const [addNews, { isLoading }] = useAddNewsMutation()

  const { errors, setValidationErrors } = useValidation<errorTypes>()

  const handleSubmit = async (formData: AddNewsTypes) => {
    const data = new FormData()

    data.append('news_title', formData.news_title)
    data.append('news_description', formData.news_description)

    // добавляем изображения, только если они не null
    for (let i = 1; i <= 7; i++) {
      const file = formData[`news_image${i}` as keyof AddNewsTypes]
      if (file) {
        data.append(`news_image${i}`, file)
      }
    }

    try {
      await addNews(data).unwrap()
      setValidationErrors({})
    } catch (error) {
      const err = error as FetchBaseQueryError

      if ('data' in err) {
        const validationErrors = err.data as Record<string, string[]>
        if (validationErrors) {
          const formattedErrors = Object.fromEntries(
            Object.entries(validationErrors).map(([key, value]) => [
              key,
              value[0],
            ]),
          )
          setValidationErrors(formattedErrors)
          return
        }
      }

      console.error('Непредвиденная ошибка:', error)
    }
  }

  return (
    <section className={s.container}>
      <AddNewsForm
        onSubmit={handleSubmit}
        errors={errors}
      />
      {isLoading && <LoaderFullScreen />}
    </section>
  )
}

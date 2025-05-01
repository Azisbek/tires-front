import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { AddNewsForm } from 'widgets/add-news-form'

import { useValidation } from 'shared/hooks/useValidation'
import { LoaderFullScreen } from 'shared/ui/loader-components'

import { useAddNewsMutation } from '../api'

import s from './AddNews.module.scss'

export interface AddNewsTypes {
  news_title: string
  news_description: string
  news_image: File[]
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
    try {
      await addNews(formData).unwrap()
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

import { FormEvent, useEffect, useRef, useState } from 'react'

import { AddNewsTypes, errorTypes } from 'pages/add-news/ui/AddNews'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './AddnewsForm.module.scss'

interface Props {
  onSubmit: (data: AddNewsTypes) => void
  errors?: Partial<errorTypes>
}

export function AddNewsForm({ onSubmit, errors }: Props) {
  const galleryInputRef = useRef<HTMLInputElement | null>(null)

  const [formData, setFormData] = useState<AddNewsTypes>({
    news_title: '',
    news_description: '',
    news_image: [],
  })

  const [preview, setPreview] = useState<string[]>([])

  useEffect(() => {
    return () => {
      preview.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [preview])

  const handleChange = <K extends keyof AddNewsTypes>(
    name: K,
    value: AddNewsTypes[K],
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGalleryClick = () => {
    galleryInputRef.current?.click()
  }

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newFiles = Array.from(files)
    const allFiles = [...formData.news_image, ...newFiles]
    const newPreviews = allFiles.map((file) => URL.createObjectURL(file))

    setFormData((prev) => ({
      ...prev,
      news_image: allFiles,
    }))
    setPreview(newPreviews)
  }

  const resetForm = () => {
    setFormData({
      news_title: '',
      news_description: '',
      news_image: [],
    })
    setPreview([])

    if (galleryInputRef.current) galleryInputRef.current.value = ''
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmit?.(formData)

    console.log(formData)
    resetForm()
  }

  return (
    <div className={s.content}>
      <p className={s.title}>Добавить новость</p>
      <form onSubmit={submitHandler}>
        <div className={s.data}>
          <p>Заголовок</p>
          {errors?.news_title && (
            <span className={s.error}>{errors.news_title}</span>
          )}
          <input
            value={formData.news_title}
            type="text"
            onChange={(e) => handleChange('news_title', e.target.value)}
          />

          <p>Введите текст</p>
          {errors?.news_description && (
            <span className={s.error}>{errors.news_description}</span>
          )}
          <textarea
            value={formData.news_description}
            onChange={(e) => handleChange('news_description', e.target.value)}
          />
        </div>

        <div className={s.images}>
          <p>Фото новости</p>
          <label htmlFor="newsPhoto">+ добавить картинку</label>

          {errors?.news_image && (
            <span className={s.error}>{errors?.news_image}</span>
          )}

          <input
            type="file"
            id="newsPhoto"
            accept="image/*"
            ref={galleryInputRef}
            hidden
            multiple
            onChange={handleGalleryChange}
          />
          {preview[0] ? (
            <img
              src={preview[0]}
              alt="image"
            />
          ) : (
            <div
              className={s.image}
              onClick={handleGalleryClick}
            />
          )}

          <p>Галерея</p>
          <label htmlFor="newsPhoto">+ добавить картинки</label>
          <div
            className={s.photos}
            onClick={handleGalleryClick}
          >
            {preview.length < 2 ? (
              <>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </>
            ) : (
              preview.slice(1).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={'news images'}
                />
              ))
            )}
          </div>

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
    </div>
  )
}

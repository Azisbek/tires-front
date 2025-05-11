import clsx from 'clsx'

import React from 'react'

import { Space } from 'shared/ui/Space/Space'

import s from './ImageUploader.module.scss'

// подключи свои стили

interface ImageUploaderProps {
  images: (File | null)[]
  onAddImages: (files: File[]) => void
  onReplaceImage: (index: number, file: File) => void
  onRemoveImage: (index: number) => void
  maxImages?: number
  error?: string
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  images,
  onAddImages,
  onReplaceImage,
  onRemoveImage,
  maxImages = 7,
  error,
}) => {
  const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileArray = e.target.files ? Array.from(e.target.files) : []
    e.target.value = ''
    if (fileArray.length > 0) {
      onAddImages(fileArray)
    }
  }

  const handleReplaceChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        onReplaceImage(index, e.target.files[0])
      }
      e.target.value = ''
    }

  return (
    <div className={s.root}>
      <label>Фото шины*</label>
      {images[0] === null && (
        <label className={s.addButton}>
          + добавить картинку
          <input
            multiple
            type="file"
            onChange={handleAddChange}
            style={{ display: 'none' }}
          />
        </label>
      )}
      <div className={`${s.photoBg} ${s.w315}`}>
        {images[0] && (
          <img
            src={URL.createObjectURL(images[0])}
            alt={`Фото ${0 + 1}`}
            className={`${s.image} `}
          />
        )}
      </div>
      {error && <p className={s.error}>{error}</p>}
      {images[0] && (
        <div className={s.controls}>
          <label>
            Заменить
            <input
              type="file"
              onChange={handleReplaceChange(0)}
              style={{ display: 'none' }}
            />
          </label>
          <button
            type="button"
            onClick={() => onRemoveImage(0)}
            className={s.removeButton}
          >
            Удалить
          </button>
        </div>
      )}
      <Space h={30} />
      <label>Галерея</label>

      {images.filter((img) => img !== null).length < maxImages && (
        <label className={s.addButton}>
          + добавить картинку
          <input
            multiple
            type="file"
            onChange={handleAddChange}
            style={{ display: 'none' }}
          />
        </label>
      )}

      <div className={s.photosWrapper}>
        {images.map((img, index) => {
          if (index === 0) return null // ничего не рендерим

          return (
            <div key={index}>
              <div className={clsx(s.photoBg, s.w120)}>
                {img && (
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`Фото ${index + 1}`}
                    className={`${s.image} `}
                  />
                )}
              </div>
              {img && (
                <div className={s.controls}>
                  <label>
                    Заменить
                    <input
                      type="file"
                      onChange={handleReplaceChange(index)}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => onRemoveImage(index)}
                    className={s.removeButton}
                  >
                    Удалить
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

import { useRef } from 'react'

import { AddProductState } from 'pages/add-product-page/model/types'

import s from './ImageUpload.module.scss'

interface Props {
  width: number
  height: number
  field: keyof AddProductState
  value: File | null
  onChange: (field: keyof AddProductState, file: File | null) => void
}

export function ImageUpload({ field, value, onChange, width, height }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onChange(field, file)
  }

  return (
    <div className={s.imageBlock}>
      <div
        className={s.square}
        onClick={handleClick}
      >
        <div
          className={s.block}
          style={{ width, height }}
        >
          {value && (
            <img
              src={URL.createObjectURL(value)}
              alt="preview"
              className={s.previewImg}
            />
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

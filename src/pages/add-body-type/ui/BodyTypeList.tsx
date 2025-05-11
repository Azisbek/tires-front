import { useState } from 'react'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Title } from 'shared/ui/Text'

import { useAddBodyTypeMutation, useGetBodyTypeQuery } from '../api'

import s from './BodyTypeList.module.scss'

export function BodyTypeList() {
  const { data = [], isFetching } = useGetBodyTypeQuery()
  const [addBodyType] = useAddBodyTypeMutation()
  const [inputValue, setInputValue] = useState('')

  const handleAdd = async () => {
    const value = inputValue.trim()
    if (!value) return

    try {
      addBodyType({ value }).unwrap()
      setInputValue('')
    } catch (err) {
      console.error('Ошибка добавления типа кузова:', err)
    }
  }

  return (
    <div className={s.container}>
      <Title
        size="md-24"
        className={s.title}
      >
        Тип Кузова
      </Title>

      <div className={s.inputContainer}>
        <input
          className={s.enterBodyType}
          type="text"
          placeholder="Введите тип кузова"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <AppButton
          className={s.createBodyType}
          variant="white"
          onClick={handleAdd}
        >
          Добавить тип кузова
        </AppButton>
      </div>

      <div className={s.listContainer}>
        {isFetching ? (
          <div>Загрузка...</div>
        ) : (
          data.map(({ id, label, value }) => (
            <div
              key={id ?? value}
              className={s.labelWrapper}
            >
              <span className={s.label}>{label}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

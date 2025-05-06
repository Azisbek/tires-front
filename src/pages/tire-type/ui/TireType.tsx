import { useState } from 'react'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Title } from 'shared/ui/Text'

import { useAddTireTypeMutation, useGetTireTypeQuery } from '../api'

import s from './TireType.module.scss'

export function TireType() {
  const { data = [], isFetching } = useGetTireTypeQuery()
  const [addTireType] = useAddTireTypeMutation()
  const [inputValue, setInputValue] = useState('')

  const handleAdd = async () => {
    const value = inputValue.trim()
    if (!value) return

    try {
      await addTireType({ value }).unwrap()
      setInputValue('')
    } catch (err) {
      console.error('Ошибка добавления типа шины:', err)
    }
  }

  return (
    <div className={s.container}>
      <Title
        size="xl-40"
        color="orange"
        className={s.title}
      >
        Тип Шины
      </Title>

      <div className={s.inputContainer}>
        <input
          className={s.enterTireType}
          type="text"
          placeholder="Введите тип шины"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <AppButton
          className={s.btn}
          variant="accent"
          onClick={handleAdd}
        >
          Добавить тип шины
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

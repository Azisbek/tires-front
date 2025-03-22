import { useState } from 'react'

import { HomeFilterTypes } from 'shared/types/HomepageTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { InputSelect } from 'shared/ui/InputSelect/InputSelect'

import s from './FilterTypes.module.scss'

export function FilterTypes({ filters }: HomeFilterTypes) {
  const [filter, setFilter] = useState({
    manufacturer: '',
    model: '',
    generation: '',
    modification: '',
    bodyType: '',
  })

  const handleChange = (key: keyof typeof filter, value: string) => {
    setFilter((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <form className={s.form}>
      <div className={s.selectContainer}>
        <InputSelect
          color="grey"
          options={filters?.manufacturers}
          defaultValue="Производитель"
          onChange={(value) => handleChange('manufacturer', value)}
        />
        <InputSelect
          color="grey"
          options={filters?.models}
          defaultValue="Модель"
          onChange={(value) => handleChange('model', value)}
        />
        <InputSelect
          color="grey"
          options={filters?.generations}
          defaultValue="Поколение"
          onChange={(value) => handleChange('generation', value)}
        />
        <InputSelect
          color="grey"
          options={filters?.modifications}
          defaultValue="Модификация"
          onChange={(value) => handleChange('modification', value)}
        />
        <InputSelect
          color="grey"
          options={filters?.body_type}
          defaultValue="Кузов"
          onChange={(value) => handleChange('bodyType', value)}
        />
      </div>

      <div className={s.btn}>
        <AppButton variant="accent">Подобрать</AppButton>
      </div>
    </form>
  )
}

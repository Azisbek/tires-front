import { useState } from 'react'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { InputSelect } from 'shared/ui/InputSelect/InputSelect'

import s from './FilterTypes.module.scss'

interface Props {
  data: {
    manufacturer: string[]
    model: string[]
    generation: string[]
    modification: string[]
    bodyType: string[]
  }
}

export function FilterTypes({ data }: Props) {
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
          options={data.manufacturer}
          defaulValue="Производитель"
          onChange={(value) => handleChange('manufacturer', value)}
        />
        <InputSelect
          options={data.model}
          defaulValue="Модель"
          onChange={(value) => handleChange('model', value)}
        />
        <InputSelect
          options={data.generation}
          defaulValue="Поколение"
          onChange={(value) => handleChange('generation', value)}
        />
        <InputSelect
          options={data.modification}
          defaulValue="Модификация"
          onChange={(value) => handleChange('modification', value)}
        />
        <InputSelect
          options={data.bodyType}
          defaulValue="Кузов"
          onChange={(value) => handleChange('bodyType', value)}
        />
      </div>

      <div className={s.btn}>
        <AppButton variant="accent">Подобрать</AppButton>
      </div>
    </form>
  )
}

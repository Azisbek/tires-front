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
          color="grey"
          options={data.manufacturer}
          defaultValue="Производитель"
          onChange={(value) => handleChange('manufacturer', value)}
        />
        <InputSelect
          color="grey"
          options={data.model}
          defaultValue="Модель"
          onChange={(value) => handleChange('model', value)}
        />
        <InputSelect
          color="grey"
          options={data.generation}
          defaultValue="Поколение"
          onChange={(value) => handleChange('generation', value)}
        />
        <InputSelect
          color="grey"
          options={data.modification}
          defaultValue="Модификация"
          onChange={(value) => handleChange('modification', value)}
        />
        <InputSelect
          color="grey"
          options={data.bodyType}
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

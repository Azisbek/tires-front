import { useState } from 'react'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { InputSelect } from 'shared/ui/InputSelect/InputSelect'

import s from './FilterTypes.module.scss'

const filtersOptions = {
  manufacturer: ['Toyota', 'BMW', 'Mercedes'],
  model: ['Camry', 'X5', 'C-Class'],
  generation: ['2020+', '2015-2019', '2010-2014'],
  modification: ['2.0 AT', '3.0 MT', 'Electric'],
  bodyType: ['Sedan', 'SUV', 'Hatchback'],
}

export function FilterTypes() {
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

  console.log(filter)

  return (
    <form className={s.form}>
      <div className={s.selectContainer}>
        <InputSelect
          options={filtersOptions.manufacturer}
          defaulValue="Производитель"
          onChange={(value) => handleChange('manufacturer', value)}
        />
        <InputSelect
          options={filtersOptions.model}
          defaulValue="Модель"
          onChange={(value) => handleChange('model', value)}
        />
        <InputSelect
          options={filtersOptions.generation}
          defaulValue="Поколение"
          onChange={(value) => handleChange('generation', value)}
        />
        <InputSelect
          options={filtersOptions.modification}
          defaulValue="Модификация"
          onChange={(value) => handleChange('modification', value)}
        />
        <InputSelect
          options={filtersOptions.bodyType}
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

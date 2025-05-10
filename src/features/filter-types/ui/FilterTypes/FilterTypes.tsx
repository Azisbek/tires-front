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

  return (
    <form className={s.form}>
      <div className={s.selectContainer}>
        <InputSelect
          options={filtersOptions.manufacturer}
          value={filter.manufacturer}
          onChange={(value) => handleChange('manufacturer', value)}
          placeholder="Производителность"
        />
        <InputSelect
          options={filtersOptions.model}
          value={filter.model}
          onChange={(value) => handleChange('model', value)}
          placeholder="Модель"
        />
        <InputSelect
          options={filtersOptions.generation}
          value={filter.generation}
          onChange={(value) => handleChange('generation', value)}
          placeholder="Поколение"
        />
        <InputSelect
          options={filtersOptions.modification}
          value={filter.modification}
          onChange={(value) => handleChange('modification', value)}
          placeholder="Модификация"
        />
        <InputSelect
          options={filtersOptions.bodyType}
          value={filter.bodyType}
          onChange={(value) => handleChange('bodyType', value)}
          placeholder="Кузов"
        />
      </div>

      <div className={s.btn}>
        <AppButton variant="accent">Подобрать</AppButton>
      </div>
    </form>
  )
}

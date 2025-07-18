import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFilters } from 'widgets/catalog-filter/model/useFilters'

import { navigationMap } from 'shared/model/navigation'
import { FilterType, HomeFilterTypes } from 'shared/types/HomepageTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { InputSelect } from 'shared/ui/input-components'

import s from './FilterTypes.module.scss'

export function FilterTypes({ filters }: HomeFilterTypes) {
  const [filter, setFilter] = useState<FilterType>({
    manufacturers: filters?.manufacturers || [],
    models: filters?.models || [],
    generations: filters?.generations || [],
    modifications: filters?.modifications || [],
    body_type: filters?.body_type || [],
  })

  const { setFilterField } = useFilters()
  const navigate = useNavigate()

  const handleChange = (key: keyof typeof filter, value: string | number) => {
    setFilter((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSubmit = () => {
    setFilterField('manufacturer', filter.manufacturers)
    // setFilterField('models', filter.models)
    // setFilterField('generations', filter.generations)
    // setFilterField('modifications', filter.modifications)
    setFilterField('tiresType', filter.body_type)

    // applyFilters()
    navigate(navigationMap.Catalog)
  }

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit}
    >
      <div className={s.selectContainer}>
        <InputSelect
          color="grey"
          options={filter?.manufacturers}
          defaultValue="Производитель"
          onChange={(value) => handleChange('manufacturers', value)}
        />
        <InputSelect
          color="grey"
          options={filter?.models}
          defaultValue="Модель"
          onChange={(value) => handleChange('models', value)}
        />
        <InputSelect
          color="grey"
          options={filter?.generations}
          defaultValue="Поколение"
          onChange={(value) => handleChange('generations', value)}
        />
        <InputSelect
          color="grey"
          options={filter?.modifications}
          defaultValue="Модификация"
          onChange={(value) => handleChange('modifications', value)}
        />
        <InputSelect
          color="grey"
          options={filter?.body_type}
          defaultValue="Кузов"
          onChange={(value) => handleChange('body_type', value)}
        />
      </div>

      <div className={s.btn}>
        <AppButton
          variant="accent"
          type="submit"
        >
          Подобрать
        </AppButton>
      </div>
    </form>
  )
}

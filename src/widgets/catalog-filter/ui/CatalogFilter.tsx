import { useState } from 'react'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { CheckboxList } from 'shared/ui/CheckboxList'
import { CustomInput } from 'shared/ui/Input'
import { InputSelect } from 'shared/ui/InputSelect/InputSelect'

import { tireFilters } from '../api/data'

import s from './CatalogFilter.module.scss'
import { FilterLabel } from './FilterLabel/FilterLabel'

export function CatalogFilter() {
  const [filters, setFilters] = useState({
    width: '',
    profile: '',
    diameter: '',
    price: ['', ''],
    type: tireFilters.type.map(() => false),
    season: tireFilters.season.map(() => false),
    condition: tireFilters.condition.map(() => false),
    manufacturer: tireFilters.manufacturer.map(() => false),
    discount: tireFilters.discount.map(() => false),
    runflat: tireFilters.runflat.map(() => false),
    offroad: tireFilters.offroad.map(() => false),
    efficiency: tireFilters.efficiency.map(() => false),
    wetGrip: tireFilters.wetGrip.map(() => false),
  })

  const handleChange = (key: string, value: string | string[]) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }))
  }

  const handlePriceChange = (index: number, value: string) => {
    setFilters((prevFilters) => {
      const updatedPrice = [...prevFilters.price]
      updatedPrice[index] = value
      return { ...prevFilters, price: updatedPrice }
    })
  }

  const handleChangeCheckbox = (
    key:
      | 'type'
      | 'season'
      | 'manufacturer'
      | 'discount'
      | 'runflat'
      | 'offroad'
      | 'efficiency'
      | 'wetGrip',
    index: number,
    value: boolean,
  ) => {
    setFilters((prevFilters) => {
      const updatedData = [...prevFilters[key]]
      updatedData[index] = value
      return { ...prevFilters, [key]: updatedData }
    })
  }

  return (
    <div className={s.filterContainer}>
      <FilterLabel label="Ширина">
        <InputSelect
          options={tireFilters.width}
          color="white"
          defaultValue="Все"
          onChange={(value) => handleChange('width', value)}
        />
      </FilterLabel>
      <FilterLabel label="Профиль">
        <InputSelect
          options={tireFilters.profile}
          color="white"
          defaultValue="Все"
          onChange={(value) => handleChange('profile', value)}
        />
      </FilterLabel>
      <FilterLabel label="Диаметр">
        <InputSelect
          options={tireFilters.diameter}
          color="white"
          defaultValue="Все"
          onChange={(value) => handleChange('diameter', value)}
        />
      </FilterLabel>
      <FilterLabel label="Цена">
        <div className={s.priceFlex}>
          <CustomInput
            type="number"
            value={filters.price[0]}
            onChange={(event) => handlePriceChange(0, event.target.value)}
          />
          <CustomInput
            type="number"
            value={filters.price[1]}
            onChange={(event) => handlePriceChange(1, event.target.value)}
          />
        </div>
      </FilterLabel>

      <FilterLabel label="Тип шин">
        <CheckboxList
          dataTexts={tireFilters.type}
          data={filters.type}
          setData={(index, value) => handleChangeCheckbox('type', index, value)}
        />
      </FilterLabel>
      <FilterLabel label="Сезонность">
        <CheckboxList
          dataTexts={tireFilters.season}
          data={filters.season}
          setData={(value, index) =>
            handleChangeCheckbox('season', value, index)
          }
        />
      </FilterLabel>
      <FilterLabel label="Производитель">
        <CheckboxList
          dataTexts={tireFilters.manufacturer}
          data={filters.manufacturer}
          setData={(value, index) =>
            handleChangeCheckbox('manufacturer', value, index)
          }
        />
      </FilterLabel>
      <FilterLabel label="Скидки">
        <CheckboxList
          dataTexts={tireFilters.discount}
          data={filters.discount}
          setData={(value, index) =>
            handleChangeCheckbox('discount', value, index)
          }
        />
      </FilterLabel>
      <FilterLabel label="Runflat">
        <CheckboxList
          dataTexts={tireFilters.runflat}
          data={filters.runflat}
          setData={(value, index) =>
            handleChangeCheckbox('runflat', value, index)
          }
        />
      </FilterLabel>
      <FilterLabel label="Off-Road">
        <CheckboxList
          dataTexts={tireFilters.offroad}
          data={filters.offroad}
          setData={(value, index) =>
            handleChangeCheckbox('offroad', value, index)
          }
        />
      </FilterLabel>
      <FilterLabel label="Индекс скорости">
        <InputSelect
          options={tireFilters.speedIndex}
          color="white"
          defaultValue={tireFilters.speedIndex[4]}
          onChange={(value) => handleChange('speedIndex', value)}
        />
      </FilterLabel>
      <FilterLabel label="Топливная экономичность">
        <CheckboxList
          dataTexts={tireFilters.efficiency}
          data={filters.efficiency}
          setData={(value, index) =>
            handleChangeCheckbox('efficiency', value, index)
          }
        />
      </FilterLabel>
      <FilterLabel label="Сцепление с мокрой поверхностью">
        <CheckboxList
          dataTexts={tireFilters.wetGrip}
          data={filters.wetGrip}
          setData={(value, index) =>
            handleChangeCheckbox('wetGrip', value, index)
          }
        />
      </FilterLabel>

      <AppButton
        variant="accent"
        className={s.applyButton}
      >
        Подобрать
      </AppButton>
      <AppButton
        variant="border"
        className={s.applyButton}
      >
        Сбросить всё
      </AppButton>
    </div>
  )
}

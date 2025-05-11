import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Checkbox } from 'shared/ui/Checkbox'
import { CheckboxList } from 'shared/ui/CheckboxList'
import { FilterLabel } from 'shared/ui/FilterLabel/FilterLabel'
import { InputFilter, InputSelect } from 'shared/ui/input-components'

import { useFilters } from '../model/useFilters'

import s from './CatalogFilter.module.scss'

interface Props {
  refetch: () => void
}

export function CatalogFilter({ refetch }: Props) {
  const { setFilterField, applyFilters, resetFilters, filterData } =
    useFilters()

  const filterApplyHandler = () => {
    applyFilters()
    refetch()
  }

  const filterResetHandler = () => {
    resetFilters()
    refetch()
  }

  return (
    <div className={s.filterContainer}>
      <FilterLabel label="Ширина">
        <InputSelect
          options={['175', '185', '195', '205', '215', '225', '235']}
          color="white"
          defaultValue="Все"
          onChange={(value) => setFilterField('width', value)}
        />
      </FilterLabel>
      <FilterLabel label="Профиль">
        <InputSelect
          options={['30', '35', '40', '45', '50', '55', '60']}
          color="white"
          defaultValue="Все"
          onChange={(value) => setFilterField('profile', value)}
        />
      </FilterLabel>
      <FilterLabel label="Диаметр">
        <InputSelect
          options={['13', '14', '15', '16', '17', '18', '19']}
          color="white"
          defaultValue="Все"
          onChange={(value) => setFilterField('diameter', value)}
        />
      </FilterLabel>
      <FilterLabel label="Цена">
        <div className={s.priceFlex}>
          <InputFilter
            type="number"
            value={filterData.minPrice}
            onChange={(event) =>
              setFilterField('minPrice', Number(event.target.value))
            }
            min={0}
          />
          <InputFilter
            type="number"
            value={filterData.maxPrice}
            onChange={(event) =>
              setFilterField('maxPrice', Number(event.target.value))
            }
            min={0}
          />
        </div>
      </FilterLabel>

      <FilterLabel label="Тип шин">
        <CheckboxList
          dataTexts={['Легковые', 'Легкогрузовой (LTR)', 'Внедорожник (SUV)']}
          data={filterData.tiresType}
          setData={setFilterField.bind(null, 'tiresType')}
        />
      </FilterLabel>
      <FilterLabel label="Сезонность">
        <CheckboxList
          dataTexts={['Летние', 'Зимние', 'Всесезонные']}
          data={filterData.season}
          setData={setFilterField.bind(null, 'season')}
        />
      </FilterLabel>
      <FilterLabel label="Производитель">
        <CheckboxList
          dataTexts={['Michelin', 'Bridgestone', 'Continental']}
          data={filterData.manufacturer}
          setData={setFilterField.bind(null, 'manufacturer')}
        />
      </FilterLabel>
      <FilterLabel label="Скидки">
        <Checkbox
          checked={filterData.promotion}
          onChange={setFilterField.bind(null, 'promotion')}
        >
          Да
        </Checkbox>
      </FilterLabel>
      <FilterLabel label="Runflat">
        <Checkbox
          checked={filterData.runflat}
          onChange={setFilterField.bind(null, 'runflat')}
        >
          Да
        </Checkbox>
      </FilterLabel>
      <FilterLabel label="Индекс скорости">
        <InputSelect
          options={['Q', 'R', 'S', 'T', 'H', 'V', 'W', 'Y', 'Z']}
          color="white"
          defaultValue="Все"
          onChange={(value) => setFilterField('speedIndex', value)}
        />
      </FilterLabel>
      <FilterLabel label="Индекс нагрузки">
        <div className={s.priceFlex}>
          <InputFilter
            type="number"
            value={filterData.minLoadIndex}
            onChange={(event) =>
              setFilterField('minLoadIndex', Number(event.target.value))
            }
            min={0}
          />
          <InputFilter
            type="number"
            value={filterData.maxLoadIndex}
            onChange={(event) =>
              setFilterField('maxLoadIndex', Number(event.target.value))
            }
            min={0}
          />
        </div>
      </FilterLabel>
      <FilterLabel label="Уровень внешнего шума">
        <div className={s.priceFlex}>
          <InputFilter
            type="number"
            value={filterData.minNoiseLevel}
            onChange={(event) =>
              setFilterField('minNoiseLevel', Number(event.target.value))
            }
            min={0}
          />
          <InputFilter
            type="number"
            value={filterData.maxNoiseLevel}
            onChange={(event) =>
              setFilterField('maxNoiseLevel', Number(event.target.value))
            }
            min={0}
          />
        </div>
      </FilterLabel>

      <AppButton
        variant="accent"
        className={s.applyButton}
        onClick={filterApplyHandler}
      >
        Подобрать
      </AppButton>
      <AppButton
        variant="border"
        className={s.applyButton}
        onClick={filterResetHandler}
      >
        Сбросить всё
      </AppButton>
    </div>
  )
}

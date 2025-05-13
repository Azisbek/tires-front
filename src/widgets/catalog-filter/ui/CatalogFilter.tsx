import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Checkbox } from 'shared/ui/Checkbox'
import { CheckboxList } from 'shared/ui/CheckboxList'
import { FilterLabel } from 'shared/ui/FilterLabel/FilterLabel'
import { InputFilter, InputSelect } from 'shared/ui/input-components'

import { useGetProductFilterQuery } from '../api'
import { FilterData } from '../model/types'
import { useFilters } from '../model/useFilters'

import s from './CatalogFilter.module.scss'

const SEASON_MAP: Record<string, string> = {
  winter: 'Зимние',
  summer: 'Летние',
  all_seasons: 'Всесезонные',
}

const reverseSeasonMap: Record<string, string> = Object.fromEntries(
  Object.entries(SEASON_MAP).map(([key, value]) => [value, key]),
)

export function CatalogFilter() {
  const { data } = useGetProductFilterQuery()
  const filters: Partial<FilterData> = data?.filter_data || {}

  const { setFilterField, applyFilters, resetFilters, filterData } =
    useFilters()

  const filterApplyHandler = () => {
    applyFilters()
  }

  const filterResetHandler = () => {
    resetFilters()
  }

  return (
    <div className={s.filterContainer}>
      <FilterLabel label="Ширина">
        <InputSelect
          options={['Все', ...(filters?.widths || '')]}
          color="white"
          defaultValue="Все"
          onChange={(value) => setFilterField('width', value)}
        />
      </FilterLabel>
      <FilterLabel label="Профиль">
        <InputSelect
          options={['Все', ...(filters?.profiles || '')]}
          color="white"
          defaultValue="Все"
          onChange={(value) => setFilterField('profile', value)}
        />
      </FilterLabel>
      <FilterLabel label="Диаметр">
        <InputSelect
          options={['Все', ...(filters?.diameters || '')]}
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
          dataTexts={filters?.tire_types || []}
          data={filterData.tiresType}
          setData={setFilterField.bind(null, 'tiresType')}
        />
      </FilterLabel>
      <FilterLabel label="Сезонность">
        <CheckboxList
          dataTexts={
            data?.filter_data?.seasons.map((season) => SEASON_MAP[season]) || []
          }
          data={filterData.season.map((item) => SEASON_MAP[item] || '')}
          setData={(selected) => {
            const mappedValues = selected
              .map((item) => reverseSeasonMap[item])
              .filter((item): item is string => !!item)
            setFilterField('season', mappedValues)
          }}
        />
      </FilterLabel>
      <FilterLabel label="Производитель">
        <CheckboxList
          dataTexts={filters?.manufacturers || []}
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
      <FilterLabel label="off_road">
        <Checkbox
          checked={filterData.off_road}
          onChange={setFilterField.bind(null, 'off_road')}
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
      <FilterLabel label="Cостояние">
        <Checkbox
          checked={filterData.condition}
          onChange={setFilterField.bind(null, 'condition')}
        >
          Только новый
        </Checkbox>
      </FilterLabel>
      <FilterLabel label="Индекс скорости">
        <InputSelect
          options={['Все', ...(filters?.speed_indexes || '')]}
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

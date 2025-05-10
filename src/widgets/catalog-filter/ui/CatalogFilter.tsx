import { useGetFilterDataMutation } from 'pages/catalog/api'

import { useFilters } from 'shared/hooks/useFilters'
import { FiltersListType, TireFilters } from 'shared/types/CatalogpageTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { CheckboxList } from 'shared/ui/CheckboxList'
import { CustomInput } from 'shared/ui/Input'
import { InputSelect } from 'shared/ui/input-components'

import s from './CatalogFilter.module.scss'
import { FilterLabel } from './FilterLabel/FilterLabel'

type Props = {
  data?: FiltersListType
  isLoading: boolean
  onApplyFilters: ReturnType<typeof useGetFilterDataMutation>[0]
  refetch: () => void
}

export function CatalogFilter({
  data,
  isLoading,
  onApplyFilters,
  refetch,
}: Props) {
  const { filters, setFilters, updateFiltersInUrl } = useFilters(data)

  const handleCheckboxChange = <K extends keyof TireFilters>(
    key: K,
    value: boolean,
    index: number,
  ) => {
    setFilters((prev) => {
      const array = prev[key]
      if (Array.isArray(array)) {
        const updated = [...array]
        updated[index] = value
        return { ...prev, [key]: updated as TireFilters[K] }
      }
      return prev
    })
  }

  const handleInputChange = <K extends keyof TireFilters>(
    key: K,
    value: string,
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value as TireFilters[K] }))
  }

  async function handleApply() {
    const filterPayload = {
      season: data?.seasons.find((_, i) => filters.seasons[i]),
      manufacturer: data?.manufacturers.find(
        (_, i) => filters.manufacturers[i],
      ),
      tire_type: data?.tire_types.find((_, i) => filters.tire_types[i]),
      condition: data?.conditions.find((_, i) => filters.condition[i]),
      min_price: filters.min_price,
      max_price: filters.max_price,
      min_load_index: filters.min_load_index,
      max_load_index: filters.max_load_index,
      min_noise_level: filters.min_noise_level,
      max_noise_level: filters.max_noise_level,
      width: filters.width,
      profile: filters.profile,
      diameter: filters.diameter,
      speed_index: filters.speed_index,
      runflat: filters.runflat[0] ?? false,
      off_road: filters.off_road[0] ?? false,
      promotion: filters.promotion[0] ?? false,
    }

    updateFiltersInUrl(filterPayload)

    await onApplyFilters(filterPayload)

    refetch()
  }

  if (isLoading) {
    return <p>Загрузка ...</p>
  }

  return (
    <div className={s.filterContainer}>
      {data && (
        <>
          <FilterLabel label="Ширина">
            <InputSelect
              options={['Все', ...data.widths]}
              color="white"
              defaultValue="Все"
              onChange={(value) => handleInputChange('width', value)}
            />
          </FilterLabel>
          <FilterLabel label="Профиль">
            <InputSelect
              options={['Все', ...data.profiles]}
              color="white"
              defaultValue="Все"
              onChange={(value) => handleInputChange('profile', value)}
            />
          </FilterLabel>
          <FilterLabel label="Диаметр">
            <InputSelect
              options={['Все', ...data.diameters]}
              color="white"
              defaultValue="Все"
              onChange={(value) => handleInputChange('diameter', value)}
            />
          </FilterLabel>
          <FilterLabel label="Тип шин">
            <CheckboxList
              dataTexts={data.conditions}
              data={filters.condition}
              setData={(value, index) =>
                handleCheckboxChange('condition', index, value)
              }
            />
          </FilterLabel>

          <FilterLabel label="Цена">
            <div className={s.priceFlex}>
              <CustomInput
                type="number"
                value={filters.min_price}
                onChange={(e) => handleInputChange('min_price', e.target.value)}
              />
              <CustomInput
                type="number"
                value={filters.max_price}
                onChange={(e) => handleInputChange('max_price', e.target.value)}
              />
            </div>
          </FilterLabel>

          <FilterLabel label="Тип шин">
            <CheckboxList
              dataTexts={data.tire_types}
              data={filters.tire_types}
              setData={(value, index) =>
                handleCheckboxChange('tire_types', index, value)
              }
            />
          </FilterLabel>

          <FilterLabel label="Сезонность">
            <CheckboxList
              dataTexts={data.seasons}
              data={filters.seasons}
              setData={(value, index) =>
                handleCheckboxChange('seasons', index, value)
              }
            />
          </FilterLabel>

          <FilterLabel label="Производитель">
            <CheckboxList
              dataTexts={data.manufacturers}
              data={filters.manufacturers}
              setData={(value, index) =>
                handleCheckboxChange('manufacturers', index, value)
              }
            />
          </FilterLabel>

          <FilterLabel label="Скидки">
            <CheckboxList
              dataTexts={['Да']}
              data={filters.promotion}
              setData={(value, index) =>
                handleCheckboxChange('promotion', index, value)
              }
            />
          </FilterLabel>

          <FilterLabel label="Runflat">
            <CheckboxList
              dataTexts={['Да']}
              data={filters.runflat}
              setData={(value, index) =>
                handleCheckboxChange('runflat', index, value)
              }
            />
          </FilterLabel>

          <FilterLabel label="Off-Road">
            <CheckboxList
              dataTexts={['Да']}
              data={filters.off_road}
              setData={(value, index) =>
                handleCheckboxChange('off_road', index, value)
              }
            />
          </FilterLabel>

          <FilterLabel label="Индекс скорости">
            <InputSelect
              options={['Все', ...data.speed_indexes]}
              color="white"
              defaultValue="Все"
              onChange={(value) => handleInputChange('speed_index', value)}
            />
          </FilterLabel>

          <FilterLabel label="Индекс нагрузки">
            <div className={s.priceFlex}>
              <CustomInput
                type="number"
                value={filters.min_load_index}
                onChange={(e) =>
                  handleInputChange('min_load_index', e.target.value)
                }
              />
              <CustomInput
                type="number"
                value={filters.max_load_index}
                onChange={(e) =>
                  handleInputChange('max_load_index', e.target.value)
                }
              />
            </div>
          </FilterLabel>

          <FilterLabel label="Топливная экономичность">
            <CheckboxList
              dataTexts={Object.values(data.fuel_efficiency)}
              data={filters.fuel_efficiency}
              setData={(value, index) =>
                handleCheckboxChange('fuel_efficiency', index, value)
              }
            />
          </FilterLabel>

          <FilterLabel label="Сцепление с мокрой поверхностью">
            <CheckboxList
              dataTexts={Object.values(data.wet_grip)}
              data={filters.wet_grip}
              setData={(value, index) =>
                handleCheckboxChange('wet_grip', index, value)
              }
            />
          </FilterLabel>

          <FilterLabel label="Уровень шума">
            <div className={s.priceFlex}>
              <CustomInput
                type="number"
                value={filters.min_noise_level}
                onChange={(e) =>
                  handleInputChange('min_noise_level', e.target.value)
                }
              />
              <CustomInput
                type="number"
                value={filters.max_noise_level}
                onChange={(e) =>
                  handleInputChange('max_noise_level', e.target.value)
                }
              />
            </div>
          </FilterLabel>
        </>
      )}

      <AppButton
        variant="accent"
        className={s.applyButton}
        onClick={handleApply}
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

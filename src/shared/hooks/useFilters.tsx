import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { FiltersListType } from 'shared/types/CatalogpageTypes'

export interface TireFilters {
  seasons: boolean[]
  manufacturers: boolean[]
  tire_types: boolean[]
  condition: boolean[]
  min_price: number
  max_price: number
  min_load_index: number
  max_load_index: number
  min_noise_level: number
  max_noise_level: number
  width: string
  profile: string
  diameter: string
  speed_index: string
  runflat: boolean[]
  off_road: boolean[]
  promotion: boolean[]
  wet_grip: boolean[]
  fuel_efficiency: boolean[]
}

export const useFilters = (data?: FiltersListType) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState<TireFilters>({
    width: '',
    profile: '',
    diameter: '',
    seasons: [],
    manufacturers: [],
    tire_types: [],
    wet_grip: [],
    fuel_efficiency: [],
    min_price: 0,
    max_price: 0,
    min_load_index: 0,
    max_load_index: 0,
    min_noise_level: 0,
    max_noise_level: 0,
    speed_index: '',
    promotion: [false],
    runflat: [false],
    off_road: [false],
    condition: [],
  })

  // Чтение параметров из URL при монтировании компонента
  useEffect(() => {
    if (!data) return

    const parseArrayParam = (key: string): string[] =>
      searchParams.get(key)?.split(',').filter(Boolean) || []

    const convertToBooleanArray = (
      options: string[],
      selected: string[],
    ): boolean[] => {
      if (selected.length === 0) {
        console.log(options)
        return options.map(() => false)
      }

      return options.map((option) => selected.includes(option))
    }

    setFilters({
      width: searchParams.get('width') || '',
      profile: searchParams.get('profile') || '',
      diameter: searchParams.get('diameter') || '',

      // Преобразование string[] => boolean[]
      seasons: convertToBooleanArray(data.seasons, parseArrayParam('season')),
      manufacturers: convertToBooleanArray(
        data.manufacturers,
        parseArrayParam('manufacturer'),
      ),
      tire_types: convertToBooleanArray(
        data.tire_types,
        parseArrayParam('tire_types'),
      ),
      condition: convertToBooleanArray(
        data.conditions,
        parseArrayParam('condition'),
      ),
      wet_grip: convertToBooleanArray(
        Object.values(data.wet_grip),
        parseArrayParam('wet_grip'),
      ),
      fuel_efficiency: convertToBooleanArray(
        Object.values(data.fuel_efficiency),
        parseArrayParam('fuel_efficiency'),
      ),

      min_price: Number(searchParams.get('min_price')) || 0,
      max_price: Number(searchParams.get('max_price')) || 0,
      min_load_index: Number(searchParams.get('min_load_index')) || 0,
      max_load_index: Number(searchParams.get('max_load_index')) || 0,
      min_noise_level: Number(searchParams.get('min_noise_level')) || 0,
      max_noise_level: Number(searchParams.get('max_noise_level')) || 0,

      speed_index: searchParams.get('speed_index') || '',

      // Булевы поля в виде boolean[] с одним значением (false/true)
      promotion: [searchParams.get('promotion') === 'true'],
      runflat: [searchParams.get('runflat') === 'true'],
      off_road: [searchParams.get('off_road') === 'true'],
    })
  }, [searchParams, data])

  // Функция для обновления фильтров в URL
  const updateFiltersInUrl = (
    filters: Record<
      string,
      string | number | string[] | undefined | null | boolean
    >,
  ) => {
    const params = new URLSearchParams()

    Object.entries(filters).forEach(([key, value]) => {
      if (
        value === undefined ||
        value === null ||
        (typeof value === 'string' && value.trim() === '') ||
        (typeof value === 'number' && value == 0) ||
        (Array.isArray(value) && value.length === 0)
      ) {
        return
      }

      if (Array.isArray(value)) {
        value.forEach((val) => params.append(key, String(val)))
      } else {
        params.set(key, String(value))
      }
    })
    setSearchParams(params)
  }

  // Функция для сброса фильтров
  const resetFilters = () => {
    setFilters({
      width: '',
      profile: '',
      diameter: '',
      seasons: [],
      manufacturers: [],
      tire_types: [],
      wet_grip: [],
      fuel_efficiency: [],
      min_price: 0,
      max_price: 0,
      min_load_index: 0,
      max_load_index: 0,
      min_noise_level: 0,
      max_noise_level: 0,
      speed_index: '',
      promotion: [false],
      runflat: [false],
      off_road: [false],
      condition: [],
    })
    setSearchParams({})
  }

  // Обновляем URL с фильтрами каждый раз, когда фильтры изменяются
  // useEffect(() => {
  //   updateFiltersInUrl()
  // }, [filters])

  return { filters, setFilters, updateFiltersInUrl, resetFilters }
}

import { useState } from 'react'

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks'

import { resetFilters, setFilters } from './filter.slice'
import { FilterState } from './types'

const defaultFilters: FilterState = {
  width: '',
  profile: '',
  diameter: '',
  minPrice: 0,
  maxPrice: 99999,
  tiresType: [],
  season: [],
  condition: false,
  manufacturer: [],
  promotion: false,
  runflat: false,
  minLoadIndex: 0,
  maxLoadIndex: 0,
  minNoiseLevel: 0,
  maxNoiseLevel: 0,
  speedIndex: '',
  fuel_efficiency: [],
  wet_grip: [],
  off_road: false,
}

export function useFilters() {
  const dispatch = useAppDispatch()
  const filters = useAppSelector((state) => state.filters)
  const [draft, setDraft] = useState<FilterState>(filters)

  const updateDraft = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K],
  ) => {
    setDraft((prev) => ({ ...prev, [key]: value }))
  }

  const applyFilters = () => {
    dispatch(setFilters(draft))
  }

  const reset = () => {
    dispatch(resetFilters())
    setDraft(defaultFilters)
  }

  return {
    filterData: draft,
    filters,
    setFilterField: updateDraft,
    applyFilters,
    resetFilters: reset,
  }
}

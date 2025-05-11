import { useState } from 'react'

import { FilterState } from './types'

const defaultFilters: FilterState = {
  width: '',
  profile: '',
  diameter: '',
  minPrice: 0,
  maxPrice: 99999,
  tiresType: [],
  season: [],
  condition: [],
  manufacturer: [],
  promotion: false,
  runflat: false,
  minLoadIndex: 0,
  maxLoadIndex: 0,
  minNoiseLevel: 0,
  maxNoiseLevel: 0,
  speedIndex: '',
}

export function useFilters() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)
  const [draft, setDraft] = useState<FilterState>(defaultFilters)

  const updateDraft = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K],
  ) => {
    setDraft((prev) => ({ ...prev, [key]: value }))
  }

  const applyFilters = () => {
    setFilters(draft)
  }

  const resetFilters = () => {
    setDraft(defaultFilters)
    setFilters(defaultFilters)
  }

  return {
    filterData: draft,
    filters,
    setFilterField: updateDraft,
    applyFilters,
    resetFilters,
  }
}

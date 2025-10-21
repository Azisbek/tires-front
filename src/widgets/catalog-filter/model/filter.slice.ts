import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { FilterState } from './types'

const initialState: FilterState = {
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

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Partial<FilterState>>) {
      return { ...state, ...action.payload }
    },
    resetFilters() {
      return initialState
    },
  },
})

export const { setFilters, resetFilters } = filtersSlice.actions

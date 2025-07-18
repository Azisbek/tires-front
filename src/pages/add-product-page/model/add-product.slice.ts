import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AddProductState } from './types'

const initialState: AddProductState = {
  title: '',
  model_description: '',
  image1: null,
  image2: null,
  image3: null,
  image4: null,
  image5: null,
  image6: null,
  image7: null,

  price: '',
  negotiable: false,

  promotion: '',
  promotion_end_date: '',

  in_stock: 0,
  profile: '',
  diameter: '',
  speed_index: '',
  load_index: '',
  load_index_for_double: '',

  manufacturer: '',
  model: '',
  generation: '',
  modification: '',
  promotionCategory: '',

  width: '',
  fuel_efficiency: 'A',
  wet_grip: 'A',
  external_noise_level: 0,

  condition: false,
  season: 0,
  tire_type: 0,
  body_type: 0,
  runflat: false,
  off_road: false,

  warranty: '',
}

export const addProductSlice = createSlice({
  name: 'addProduct',
  initialState,
  reducers: {
    setField<K extends keyof AddProductState>(
      state: Draft<AddProductState>,
      action: PayloadAction<{ field: K; value: AddProductState[K] }>,
    ) {
      state[action.payload.field] = action.payload.value
    },
    resetState() {
      return initialState
    },
  },
})

export const { setField, resetState } = addProductSlice.actions

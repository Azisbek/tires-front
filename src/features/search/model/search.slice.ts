import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface SearchState {
  search: string
  productSearch?: string
}

const initialState: SearchState = {
  search: '',
  productSearch: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },

    clearSearch: (state) => {
      state.search = ''
    },

    setProductSearch: (state, action: PayloadAction<string>) => {
      state.productSearch = action.payload
    },
  },
})

export const { setSearch, clearSearch, setProductSearch } = searchSlice.actions

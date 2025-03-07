import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ScreenState {
  width: number
}

const initialState: ScreenState = {
  width: window.innerWidth,
}

export const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setWidth(state, action: PayloadAction<number>) {
      state.width = action.payload
    },
  },
})

export const { setWidth } = screenSlice.actions
export default screenSlice.reducer

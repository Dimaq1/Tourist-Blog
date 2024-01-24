import { createSlice } from '@reduxjs/toolkit'

const initialState = { top: 0, behavior: 'smooth' }

const buttonScrollDownSlice = createSlice({
  name: 'buttonScrollDown',
  initialState,
  reducers: {
    scrollDown(state) {
      window.scrollBy({ ...state, top: window.innerHeight });
    },
  },
})
export const { scrollDown } = buttonScrollDownSlice.actions
export default buttonScrollDownSlice.reducer
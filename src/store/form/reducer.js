import { createSlice } from '@reduxjs/toolkit'
import thunks from './thunks'

const initialState = {
  isSubmit: false,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    removeMessage(state) {
      return { ...state, isSubmit: false };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.postUser.fulfilled, (state, { payload }) => {
        state.isSubmit = true
      })
  },
})

export const { removeMessage } = formSlice.actions;
export default formSlice.reducer
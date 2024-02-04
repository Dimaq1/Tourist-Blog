import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  drawerOpenValue: false
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    drawerOpen(state) {
      return { ...state, drawerOpenValue: true };

    },
    drawerClose(state) {
      return { ...state, drawerOpenValue: false }
    }
  },
})
export const { drawerOpen, drawerClose } = navigationSlice.actions
export default navigationSlice.reducer
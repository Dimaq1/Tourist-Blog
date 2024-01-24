import { configureStore } from '@reduxjs/toolkit'
import buttonScrollDownReducer from '../store/buttonScrollDown/reducer'

const store = configureStore(
  {
    reducer: {
      buttonScrollDownReducer,
    },
  }
)

export default store
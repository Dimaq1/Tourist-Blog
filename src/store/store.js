import { configureStore } from '@reduxjs/toolkit'
import buttonScrollDownReducer from '../store/buttonScrollDown/reducer'
import navigationReducer from '../store/navigation/reducer'

const store = configureStore({
  reducer: {
    buttonScrollDownReducer,
    navigationReducer,
  },
});

export default store
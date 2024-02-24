import { configureStore } from '@reduxjs/toolkit'
import buttonScrollDown from '../store/buttonScrollDown/reducer'
import navigation from '../store/navigation/reducer'
import blogPosts from '../store/blogPosts/reducer'

const store = configureStore({
  reducer: {
    buttonScrollDown,
    navigation,
    blogPosts
  },
});

export default store
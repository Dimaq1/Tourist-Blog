import { createSlice } from '@reduxjs/toolkit'
import thunks from './thunks'

const initialState = {
  blogPosts: []
}

const blogPostsSlice = createSlice({
  name: 'blogPosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchBlogPosts.fulfilled, (state, { payload }) => {
        state.blogPosts = payload
      })
  },
})

export default blogPostsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import thunks from './thunks'

const initialState = {
  blogPosts: [],
  blogPost: {},
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
      .addCase(thunks.fetchBlogPost.fulfilled, (state, { payload }) => {
        state.blogPost = { ...payload }
      })
  },
})

export default blogPostsSlice.reducer

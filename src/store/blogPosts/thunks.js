import { createAsyncThunk } from "@reduxjs/toolkit"
import { getBlogPosts } from "../../services/blogPostsServices"

const thunks = {
  fetchBlogPosts: createAsyncThunk(
    'blogPosts/fetchBlogPosts',
    async () => await getBlogPosts()
  )
}

export default thunks
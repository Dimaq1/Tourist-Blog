import { createAsyncThunk } from "@reduxjs/toolkit"
import { getBlogPosts, getBlogPost } from "../../services/blogPostsServices"

const thunks = {
  fetchBlogPosts: createAsyncThunk(
    'blogPosts/fetchBlogPosts',
    async () => await getBlogPosts()
  ),
  fetchBlogPost: createAsyncThunk(
    'blogPost/fetchBlogPost',
    async (id) => await getBlogPost(id)
  ),
}

export default thunks
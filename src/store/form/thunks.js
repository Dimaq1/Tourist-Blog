import { createAsyncThunk } from "@reduxjs/toolkit"
import { postUser } from "../../services/users.js"

const thunks = {
  postUser: createAsyncThunk(
    'user/postUser',
    async (values) => await postUser(values)
  ),
}

export default thunks
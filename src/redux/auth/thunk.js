import { login, getMeWithToken } from 'src/services/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const loginThunk = createAsyncThunk('auth/loginThunk', async (infoUser, thunkAPI) => {
  const data = await login(infoUser)
  const profile = await getMeWithToken(data.jwt)
  data.user = { ...data.user, ...profile }
  return data
})

export default {
  [loginThunk.pending]: (state, action) => {
    state.loading = true
  },
  [loginThunk.fulfilled]: (state, action) => {
    state.token = action.payload.jwt
    state.user = action.payload.user
    state.loading = false
  },
  [loginThunk.rejected]: (state, action) => {
    state.loading = false
  }
}

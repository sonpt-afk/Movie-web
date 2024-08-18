import { createSlice } from '@reduxjs/toolkit'
import auth from './thunk'

const initialState = {
  token: '',
  user: {},
  loading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAccess: (state, action) => {
      state.token = action.payload.token
      state.user = action.payload.user
      console.log('action.payload', action.payload)
    },
    logout: (state) => {
      state.token = ''
      state.user = {}
      state.loading = false
    }
  },
  extraReducers: auth
})

export const { setUserAccess, logout } = authSlice.actions
export default authSlice.reducer

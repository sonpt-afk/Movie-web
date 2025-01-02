import axios from 'axios'

export const register = async (infoUser) => {
  const response = await axios.post(`/register`, infoUser)
  return response.data
}

export const login = async (infoUser) => {
  const response = await axios.post(`/login`, infoUser)
  return response.data
}
export const getMeWithToken = async (token) => {
  const response = await axios.get(`/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const getMe = async () => {
  const response = await axios.get(`/user`)
  return response.data
}

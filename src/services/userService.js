import axios from 'axios'

const BASE_URL = 'https://mini-ecommerce-devf.onrender.com'
// const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const getAllUsersService = (jwtToken) => axios.get(`${BASE_URL}/users`, { headers: { authorization: `Bearer ${jwtToken}` } })
const createNewItem = (data, jwtToken) => axios.post(`${BASE_URL}/items`, { headers: { authorization: `Bearer ${jwtToken}` } }, data)

export {
  loginUserService,
  registerUserService,
  getAllUsersService,
  createNewItem
}

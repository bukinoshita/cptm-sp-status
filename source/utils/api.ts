import axios, { AxiosError, AxiosResponse } from 'axios'
import { Lines } from './parser'

const api = axios.create({
  baseURL: 'http://apps.cptm.sp.gov.br:8080/AppMobileService/api',
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.response.use(
  (response: AxiosResponse<{ data: Lines }>) => {
    return response
  },
  (error: AxiosError) => Promise.reject(error)
)

export { api }

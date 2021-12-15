import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const http: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
})

http.defaults.headers.post['Content-Type'] = 'application/json'

let responseType = ''

http.interceptors.response.use(
  async (response: AxiosResponse): Promise<unknown> => {
    if (response.status >= 200 && response.status < 300) {
      // console.log('Response: ', response.data);
      // console.log('Response type: ', typeof response.data);
      responseType = typeof response
      return response
    }
  },
  (error: AxiosError) => {
    const {
      response,
      request,
    }: { response?: AxiosResponse; request?: XMLHttpRequest } = error

    if (response) {
      if (response.status >= 400 && response.status < 500) {
        console.log(response.data?.data?.message)
        return null
      }
    } else if (request) {
      console.error('Request failed. Please try again.')
      return null
    }
    return Promise.reject(response?.data)
  }
)

export type ResponseType = typeof responseType

export default http

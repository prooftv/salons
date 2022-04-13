import http from '@services/httpServices'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const login = async (data) => {
  const urlPath = '/signin'

  try {
    const response = await http.post(urlPath, data)
    return response
  } catch (error) {
    throw new Error(error)
  }
}

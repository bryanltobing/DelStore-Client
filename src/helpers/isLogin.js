const { readCookie } = require('./cookies')

export const isLogin = () => {
  return readCookie('authToken')
}

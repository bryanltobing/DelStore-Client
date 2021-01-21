import authRequest from 'apis/authRequest'
import { createCookie } from 'helpers/cookies'
import history from 'helpers/history'

export const Login = async (
  email,
  password,
  remember,
  [setIsLoading, setSubmitError]
) => {
  try {
    setSubmitError('')
    setIsLoading(true)
    const response = await authRequest.post('/login', {
      email,
      password,
    })
    const authToken = response.data?.data?.authToken

    if (remember) {
      createCookie('authToken', authToken, 7)
    } else {
      createCookie('authToken', authToken)
    }
    setIsLoading(false)

    history.push('/')
  } catch (err) {
    setIsLoading(false)
    setSubmitError(err.response.data?.message)

    console.log(err.response.data)
  }
}

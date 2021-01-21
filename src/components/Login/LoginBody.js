import Snackbar from 'components/_common/Alert/Snackbar'
import AuthTextInput from 'components/_common/Auth/AuthTextInput'
import { Login } from 'fetcher/auth'
import Separator from 'helpers/Separator'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import SubmitButton from 'components/_common/Auth/SubmitButton'

const LoginBody = () => {
  const { Form, CheckboxInput, TextInputWrapper } = classes

  const [email, setEmail] = useState({
    value: '',
    error: '',
  })
  const [password, setPassword] = useState({
    value: '',
    error: '',
  })

  const [rememberMe, setRememberMe] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const [submitError, setSubmitError] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()

    if (!validator.isEmail(email.value)) {
      setEmail(state => ({
        ...state,
        error: 'Invalid email address',
      }))
      return
    }

    if (!password.value) {
      setPassword(state => ({
        ...state,
        error: 'Password is required',
      }))
      return
    }

    Login(email.value, password.value, rememberMe, [
      setIsLoading,
      setSubmitError,
    ])
  }

  return (
    <>
      <form className={Form} onSubmit={handleSubmit}>
        <div className={TextInputWrapper}>
          <AuthTextInput
            valueInput={email}
            name="email"
            type="text"
            isLoading={isLoading}
            placeholder="Email address"
            setValue={setEmail}
            trim={true}
          />
          <Separator height="10px" />
          <AuthTextInput
            valueInput={password}
            name="password"
            type="password"
            isLoading={isLoading}
            placeholder="Password"
            setValue={setPassword}
            trim={true}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className={CheckboxInput(isLoading)}
              checked={rememberMe}
              onChange={evt => setRememberMe(evt.target.checked)}
              disabled={isLoading}
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link
              to="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Don't have an account? Register now
            </Link>
          </div>
        </div>

        <SubmitButton isLoading={isLoading} text="Sign in" />
      </form>

      {submitError !== '' && (
        <Snackbar text={submitError} color="red-600" timeout={3000} />
      )}
    </>
  )
}

const classes = {
  Form: 'mt-8 space-y-6',
  TextInputWrapper: 'rounded-md shadow-sm -space-y-px',
  CheckboxInput: isLoading =>
    `h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded ${
      isLoading && 'animate-pulse'
    }`,
}

export default LoginBody

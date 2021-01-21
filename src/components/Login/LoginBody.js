import Snackbar from 'components/_common/Alert/Snackbar'
import AuthTextInput from 'components/_common/Auth/AuthTextInput'
import { Text } from 'components/_common/Typography/Typography'
import { Login } from 'fetcher/auth'
import Separator from 'helpers/Separator'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'

const LoginBody = () => {
  const { Form, InputText, SubmitButton, CheckboxInput } = classes

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
        <div className="rounded-md shadow-sm -space-y-px">
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

        <div>
          <button
            type="submit"
            className={SubmitButton(isLoading)}
            disabled={isLoading}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>

      {submitError !== '' && (
        <Snackbar text={submitError} color="red-600" timeout={3000} />
      )}
    </>
  )
}

const classes = {
  Form: 'mt-8 space-y-6',
  InputText: (error, isLoading) =>
    `appearance-none rounded-none relative block w-full px-3 py-2 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm ${
      !error
        ? `border border-gray-300 ${!isLoading && 'focus:border-indigo-500'} `
        : `border-2 border-red-700 focus:border-red-700`
    } ${
      isLoading
        ? 'bg-gray-300 animate-pulse text-gray-300 placeholder-gray-300 border-gray-300 focus:border-gray-300 cursor-default'
        : 'text-gray-900 placeholder-gray-500'
    }`,
  CheckboxInput: isLoading =>
    `h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded ${
      isLoading && 'animate-pulse'
    }`,
  SubmitButton: isLoading =>
    `group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
      isLoading
        ? 'bg-indigo-300 hover:bg-indigo-300 cursor-default animate-pulse'
        : 'bg-indigo-600 hover:bg-indigo-700'
    }  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
}

export default LoginBody

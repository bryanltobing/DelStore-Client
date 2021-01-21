import Snackbar from 'components/_common/Alert/Snackbar'
import AuthPhoneNumberInput from 'components/_common/Auth/AuthPhoneNumberInput'
import AuthTextInput from 'components/_common/Auth/AuthTextInput'
import CheckboxInput from 'components/_common/Auth/CheckboxInput'
import SubmitButton from 'components/_common/Auth/SubmitButton'
import { Register } from 'fetcher/auth'
import Separator from 'helpers/Separator'
import React, { useEffect, useState } from 'react'
import 'react-phone-number-input/style.css'
import validator from 'validator'

const RegisterBody = () => {
  const inputObject = { value: '', error: '' }
  const [name, setName] = useState(inputObject)
  const [email, setEmail] = useState(inputObject)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('')
  const [password, setPassword] = useState(inputObject)
  const [confirmPassword, setConfirmPassword] = useState(inputObject)

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (phoneNumber !== '') {
      setPhoneNumberError('')
    }
  }, [phoneNumber])

  const handleSubmit = evt => {
    evt.preventDefault()

    const formValid = []

    if (!validator.isEmail(email.value)) {
      setEmail(state => ({
        ...state,
        error: 'Invalid email address',
      }))
      formValid.push(1)
    }

    if (!name.value) {
      setName(state => ({
        ...state,
        error: 'Full Name is required',
      }))
      formValid.push(1)
    }

    if (!phoneNumber) {
      setPhoneNumberError('Phone Number is required')
      formValid.push(1)
    }

    if (!password.value) {
      setPassword(state => ({
        ...state,
        error: 'Password is required',
      }))
      formValid.push(1)
    }

    if (!confirmPassword.value) {
      setConfirmPassword(state => ({
        ...state,
        error: 'Confirmation Password is required',
      }))
      formValid.push(1)
    }

    if (confirmPassword.value !== password.value) {
      setConfirmPassword(state => ({
        ...state,
        error: 'Confirmation Password do not match',
      }))
      formValid.push(1)
    }

    if (formValid.length === 0) {
      Register(name.value, email.value, phoneNumber, password.value, [
        setIsLoading,
        setSubmitError,
      ])
    }
  }

  return (
    <>
      <form className={classes.Form} onSubmit={handleSubmit}>
        <div className={classes.TextInputWrapper}>
          <AuthTextInput
            valueInput={name}
            setValue={setName}
            name="name"
            placeholder="Full name"
            type="text"
            isLoading={isLoading}
          />
          <Separator height="10px" />
          <AuthTextInput
            valueInput={email}
            setValue={setEmail}
            name="email"
            placeholder="Email address"
            type="text"
            isLoading={isLoading}
          />
          <Separator height="10px" />

          <AuthPhoneNumberInput
            phonenumber={phoneNumber}
            error={phoneNumberError}
            setPhoneNumber={setPhoneNumber}
            placeholder="Enter Phone Number (08XX XXXX)"
            isLoading={isLoading}
          />
          <Separator height="10px" />

          <AuthTextInput
            valueInput={password}
            setValue={setPassword}
            name="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            isLoading={isLoading}
          />
          <Separator height="10px" />

          <AuthTextInput
            valueInput={confirmPassword}
            setValue={setConfirmPassword}
            name="confirmPassword"
            placeholder="Confirmation Password"
            type={showPassword ? 'text' : 'password'}
            isLoading={isLoading}
          />
        </div>
        <CheckboxInput
          label="Show Password"
          checked={showPassword}
          setChecked={setShowPassword}
          isLoading={isLoading}
          link={{
            value: true,
            text: 'Already have an account? Login',
            linkTo: '/login',
          }}
        />
        <SubmitButton text="Sign up" isLoading={isLoading} />
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
}

export default RegisterBody

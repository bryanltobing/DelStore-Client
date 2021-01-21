import React from 'react'
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-number-input/input'
import { Text } from '../Typography/Typography'

const AuthPhoneNumberInput = props => {
  return (
    <div>
      {props.error && (
        <Text size="xs" color="red-500" weight="medium">
          {props.error}
        </Text>
      )}
      <PhoneInput
        phonenumber={props.phoneNumber}
        onChange={props.setPhoneNumber}
        country="ID"
        international
        className={classes.InputText(props.error, props.isLoading)}
        placeholder={props.placeholder}
      />
    </div>
  )
}

AuthPhoneNumberInput.propTypes = {
  phonenumber: PropTypes.any.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
}

const classes = {
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
}

export default AuthPhoneNumberInput

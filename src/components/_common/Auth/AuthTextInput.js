import React from 'react'
import { Text } from '../Typography/Typography'
import PropTypes from 'prop-types'

const AuthTextInput = ({
  valueInput,
  setValue,
  trim,
  isLoading,
  name,
  type,
  placeholder,
}) => {
  const { InputText } = classes
  return (
    <div>
      {valueInput?.error && (
        <Text size="text-xs" color="text-red-500" weight="font-medium">
          {valueInput?.error}
        </Text>
      )}
      <label htmlFor={name} className="sr-only">
        {name}
      </label>
      <input
        name={name}
        type={type || 'text'}
        className={InputText(valueInput?.error, isLoading)}
        placeholder={placeholder}
        value={valueInput?.value}
        onChange={evt =>
          setValue({ value: trim ? evt.target.value.trim() : evt.target.value })
        }
      />
    </div>
  )
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

AuthTextInput.propTypes = {
  valueInput: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  trim: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default AuthTextInput

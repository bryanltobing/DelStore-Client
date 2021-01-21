import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CheckboxInput = props => {
  const { CheckboxInput } = classes
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          className={CheckboxInput(props.isLoading)}
          checked={props.checked}
          onChange={evt => props.setChecked(evt.target.checked)}
          disabled={props.isLoading}
        />
        <label
          htmlFor={props.label}
          className={`ml-2 block text-sm text-gray-900 ${
            props.isLoading && 'animate-pulse'
          }`}
        >
          {props.label}
        </label>
      </div>

      {props.link && (
        <div className="text-sm">
          <Link
            to={props.link.linkTo}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {props.link.text}
          </Link>
        </div>
      )}
    </div>
  )
}

const classes = {
  CheckboxInput: isLoading =>
    `h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded ${
      isLoading && 'animate-pulse'
    }`,
}

CheckboxInput.propTypes = {
  isLoading: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
  label: PropTypes.string,
  link: PropTypes.bool,
}

export default CheckboxInput

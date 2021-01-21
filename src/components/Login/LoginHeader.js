import React from 'react'
import { Link } from 'react-router-dom'

const LoginHeader = () => {
  const { Logo, H2Title, PInfo } = classes
  return (
    <div>
      <Link to="/">
        <img
          className={Logo}
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className={H2Title}>Del Store</h2>
      </Link>
      <p className={PInfo}>
        <Link
          to="/login"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sign in to your account
        </Link>
      </p>
    </div>
  )
}

const classes = {
  Logo: 'mx-auto h-12 w-auto',
  H2Title: 'mt-6 text-center text-3xl font-extrabold text-gray-900',
  PInfo: 'mt-2 text-center text-sm text-gray-600',
}

export default LoginHeader

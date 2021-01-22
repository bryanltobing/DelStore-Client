import React from 'react'

const FallbackTemp = ({ display }) => {
  return (
    <div className={classes.MainContainer(display)}>
      <img
        className={classes.Loading(display)}
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
    </div>
  )
}

const classes = {
  MainContainer: display =>
    display === 'block'
      ? 'max-w-7x mx-auto'
      : 'flex flex-column justify-center items-center h-screen',
  Loading: display =>
    `animate-spin mx-auto w-auto ${display === 'block' && 'w-2/4 mt-3'}`,
}

export default FallbackTemp

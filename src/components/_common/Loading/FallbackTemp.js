import React from 'react'

const FallbackTemp = () => {
  return (
    <div className={classes.MainContainer}>
      <img
        className={classes.Loading}
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
    </div>
  )
}

const classes = {
  MainContainer: 'flex flex-column justify-center items-center h-screen',
  Loading: 'animate-spin mx-auto w-auto',
}

export default FallbackTemp

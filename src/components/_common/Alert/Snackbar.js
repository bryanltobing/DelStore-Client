import React, { useEffect, useRef, useState } from 'react'

const Snackbar = ({ text, color, borderColor, timeout }) => {
  const { MainContainer, Text } = classes
  const [animate, setAnimate] = useState(true)
  const [active, setActive] = useState(true)

  let timeoutid = useRef()

  useEffect(() => {
    timeoutid.current = setTimeout(() => {
      setActive(false)
    }, timeout)

    return () => {
      clearTimeout(timeoutid.current)
      setActive(true)
    }
  }, [timeout])

  const stopAnimate = () => {
    setAnimate(false)
    clearTimeout(timeoutid.current)
  }

  const startAnimate = () => {
    setAnimate(true)
    timeoutid.current = setTimeout(() => {
      setActive(false)
    }, timeout)
  }

  return (
    <>
      {active && (
        <div
          className={MainContainer(color, animate, borderColor)}
          onMouseEnter={stopAnimate}
          onMouseLeave={startAnimate}
        >
          <p className={Text}>{text}</p>
        </div>
      )}
    </>
  )
}

const classes = {
  MainContainer: (color, animate, borderColor) =>
    `absolute top-0 right-20 h-12 w-auto px-3 border-2 rounded-md ${color} ${borderColor}  ${
      animate && 'animate-pulse cursor-default'
    }`,
  Text: 'flex flex-column items-center justify-center h-full cursor-default',
}

export default Snackbar

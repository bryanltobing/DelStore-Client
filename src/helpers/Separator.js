import React from 'react'

const Separator = ({ width, height }) => {
  const separatorStyle = {
    width: width ? width : 'auto',
    height: height ? height : 'auto',
  }
  return <div style={separatorStyle}></div>
}

export default Separator

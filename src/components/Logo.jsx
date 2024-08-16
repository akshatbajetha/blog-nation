import React from 'react'
import HeaderLogo from '../assets/Logo.png'

function Logo({width='100px'}) {
  return (
    <div>
      <img className='m-0 p-0' src={HeaderLogo} alt="Logo" width={width} />
    </div>
  )
}

export default Logo
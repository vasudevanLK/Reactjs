import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <div className='footer' >Copyright &copy; {year.getFullYear()} </div>
  )
}

export default Footer
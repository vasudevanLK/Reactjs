import React from 'react'

const Header = ({title}) => {
  return (
    <div className='header'>
        <h1>{title}</h1>
    </div>
  )
}

Header.defaultProps ={
  title:"TO DO LIST"
}

export default Header
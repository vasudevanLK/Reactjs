import React from 'react'

const Footer = ({length}) => {
   
  return (
    <div className='footer'style={{fontStyle:"italic", fontFamily:"fantasy"}} > {length}    List   {length === 1 ?"Item":"Items" }  </div>
  )
}

export default Footer
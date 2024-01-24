import React, { useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'
const Content = ({items,handleCheck,handleDelete}) => {
  

  return (
    <main className='main'>
      {items.length ?(
        <ul>
           {items.map((item)=>(
            <li className='item' key={item.id}>
                <input
                  type='checkbox'
                  onChange={()=>handleCheck(item.id)}
                  checked = {item.checked}
                />
                <label className='label' onDoubleClick={()=>handleCheck(item.id)} style={(item.checked)?{textDecoration:"line-through"}:null} >{item.item}</label>
                <FaTrashAlt
                onClick={()=>handleDelete(item.id)}
                role='button'
                tabIndex={'0'}
                
                />
            </li>

           ))}
        </ul>):(
          <p style={{fontWeight:"100"}}>YOUR LIST IS EMPTY</p>
        )}

    </main>
  )
}

export default Content
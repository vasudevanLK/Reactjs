import React, { useState } from 'react'

const Content = () => {

    const[items,setItems] = useState([
        {id:1,
         checked:true,
         item:"coding"   
        },
        {id:2,
            checked:false,
            item:"old-coding"   
        },
        {id:3,
            checked:false,
            item:"new-coding"   
        }
  ])


  return (
    <main className='main'>
        <ul>
           {items.map((item)=>(
            <li>
                <input
                  type='checkbox'
                  checked = {item.checked}
                />
                <label>{item.item}</label>
                <button>Delete</button>
            </li>

           ))}
        </ul>

    </main>
  )
}

export default Content
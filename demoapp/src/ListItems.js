import React from 'react'
import LineItems from './LineItems'

    function ListItems({items,handleCheck,handleDelete}) {
    return (
    <ul>
        {items.map((item)=>(
          <LineItems
          item ={item}
          key={item.id}
          handleCheck ={handleCheck}
          handleDelete ={handleDelete}
    />

        ))}
    </ul>
    )
    }

export default ListItems
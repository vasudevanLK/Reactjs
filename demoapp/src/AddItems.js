import React from 'react'
import { FaPlus } from 'react-icons/fa'

function AddItems({newItem,SetNewItem,handleSubmit}) {
  return (
    <form className='searchForm' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor='addItem'>Add Task's</label>
        <input
        autoFocus
        id='addItem'
        type='text'
        required
        value={newItem}
        onChange={(e)=>SetNewItem(e.target.value)}
        placeholder='Add Here'
        />


        <button type='submit'>
            <FaPlus/>
            </button>

        
    </form>
  )
}

export default AddItems
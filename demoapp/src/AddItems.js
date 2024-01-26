import React from 'react'
import { FaPlus } from 'react-icons/fa'

function AddItems({newItem,SetNewItem,handleSubmit}) {
  return (
    <form className='searchForm' onSubmit={handleSubmit(e)}>
        <label htmlFor='addItems'>Add Task's</label>
        <input
        autoFocus
        id='addItem'
        type='text'
        value={newItem}
        onChange={(e)=>SetNewItem(e.target.value)}
        placeholder='Add Here'
        required/>


        <button type='submit'>
            <FaPlus/>
            </button>

        
    </form>
  )
}

export default AddItems
import React from 'react'
import { FaPlus } from 'react-icons/fa'  
import { useRef } from 'react'


const Additem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form action="" className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add item</label>
        <input type="text" 
        autoFocus
        ref={inputRef}
        id='addItem'
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        placeholder='Add Item'
        required
        />
        <button type='submit'  onClick={()=>inputRef.current.focus()} >
           < FaPlus />
          
        </button>
    </form>
  )
}

export default Additem
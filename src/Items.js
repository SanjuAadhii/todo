import React from 'react'
import Lists from './Lists'
const Items = ({items,check,deletee}) => {
  return (
        <ul>  {items.map((item)=>(
     <Lists
      item ={item}
      key ={item.id}
      check = {check}
      deletee={deletee} 
    />   
    )
    )
}
</ul>
  )
}

export default Items



import React from 'react';
import Items from './Items';




const Content=({items,check,deletee})=>{

   
    return(
    
    <>
 {(items.length)>=1 ?

      <Items 
      items={items}
      key={items.id}
      check = {check}
      deletee={deletee}/>
       :
       <p style={{marginTop:"2rem"}}>Your list contains no elements</p>
}
    </>
    
    
    
    
    )
    
     
}


export default Content;
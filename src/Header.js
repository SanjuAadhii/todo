import React from 'react'
import {IoInvertMode} from 'react-icons/io5'

const Header = ({title,bgColor,setBgColor,colorText,setColorText}) => {
  return (
<header style={{backgroundColor:bgColor? bgColor : "mediumblue", 
color: colorText ? "white" : "black" }}><h1>{title}</h1>
<input type="text" 
style={{width:"100px",border:"none",borderRadius:"10px",padding:"3px"}}
value={bgColor}
onChange={(e)=>setBgColor(e.target.value)}
placeholder=' color you want'
/>

<button 
style={{width:"5px", height:"30px",padding:"3px",border:"none",borderRadius:"100px"}}
onClick={()=>setColorText(!colorText)}
>
<IoInvertMode style={{color:"black"}} /> </button>
</header>



  )
}

export default Header
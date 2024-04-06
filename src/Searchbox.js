import React from 'react'

const Searchbox = ({search,setSearch}) => {
  return (
    <form 
    className='searchForm'
    onSubmit={(e)=>e.preventDefault()}
    >
        <label>Searchbox</label>
        <input 
        type='text' 
        id='search'
        role='searchbox'
        placeholder='search task'
        value={search}
        onChange={(e)=>setSearch(
            e.target.value
        )}
        
        />
    </form>

    
    
    )
}

export default Searchbox
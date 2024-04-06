import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState ,useEffect } from 'react';
import Additem from './Additem';
import Searchbox from './Searchbox';
import apiRequest from './apiRequest.js';


function App() {

   const API_URL = 'http://localhost:3500/items';
   //const saveItem =JSON.parse(localStorage.getItem('todo-list'));
   const [items,setItems]= useState([]);
   const [newItem , setNewItem] = useState("");
   const [search , setSearch] = useState("");
   const [bgColor , setBgColor] = useState("");
   const [colorText , setColorText] = useState("false");
   const [fetchError,setFetchError]= useState(null)  ;
   const [isLoading,setIsLoading]= useState(true);

   useEffect(()=>{
    // JSON.parse(localStorage.getItem('todo-list'))
    const fetchItem =async()=>{
      try{
         const response =await fetch(API_URL);
         if(!response.ok){
          throw Error("Data not  Received");
         }
         const listItems = await response.json();
         console.log(listItems)
         setItems(listItems)
         setFetchError(null);
      }
      catch(err){
        setFetchError(err.message)

      }finally{
       setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async ()=> await fetchItem())()
    }, 2000); 
   
  },[]); 


   const addItem =async(item)=>{
    const id =items.length? items[items.length-1].id+1: 1;
    const addnewitem= {id,checked:false,task:item}
    const listItem=[...items,addnewitem]
     setItems(listItem);
    //  localStorage.setItem('todo-list',JSON.stringify(listItem))
     const postOptions ={
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addnewitem)
     }
     
    
        const result = await apiRequest(API_URL, postOptions);
        
          setFetchError(result);
     
    
   }
   const handleSubmit = (e)=> {
    e.preventDefault()
    console.log("submitted")
    if(!newItem) return
    console.log(newItem);
    addItem(newItem)
    setNewItem('')
    // setItems(additem=>[...additem,{id:items.length+1,task:newItem,checked:false}])
    // localStorage.setItem("todo-list",JSON.stringify(setItems))  
  }

   async function check(id){
       let listItem = items.map((item)=>item.id===id?{...item,checked:!item.checked} : item)
       setItems(listItem);
       localStorage.setItem("todo-list",JSON.stringify(listItem))
       let item = listItem.filter(item=>item.id===id)
       const patchOptions ={
        method: 'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({checked:item[0].checked})
       }
       const reqUrl =`${API_URL}/${id}`;
      
          const result = await apiRequest(reqUrl, patchOptions);
          
            setFetchError(result);
       
   }

async function deletee (id){
let listItem = items.filter((item)=>(item.id!==id))
setItems(listItem)
const deleteOptions ={
 method: 'DELETE',

}
const reqUrl =`${API_URL}/${id}`;

   const result = await apiRequest(reqUrl, deleteOptions);
   
     setFetchError(result);
}


  return (
    <div className="App">
      <header className="App-header" />    
      <Header title="To-do List1 "
      colorText={colorText}
      setColorText={setColorText}
      bgColor={bgColor}
      setBgColor={setBgColor}
      />
      <Additem 
      newItem ={newItem}
      setNewItem ={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Searchbox 
      search ={search}
      setSearch={setSearch}
      />
      <main>
      {isLoading && <p>Loading Items</p>}
        {fetchError && <p>{`Error:${fetchError}`}</p>}
      {!isLoading && !fetchError &&<Content   
      items={!search?items:items.filter(item => (item.task.toLowerCase()).includes(search.toLowerCase()))
    }
      check = {check}
      deletee={deletee}
      />}
      </main>
      <Footer 
      length={items.length}
      />
    </div>
  );
}

export default App;

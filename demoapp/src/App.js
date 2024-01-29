import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import "./App.css";
import { useState } from "react";
import AddItems from "./AddItems";
import Search from "./Search";



function App(){
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

const [newItem,setNewItem] = useState('')
const [search,setSearch] = useState('')


const handleCheck=(id) =>{
const listItems = items.map((item)=> 
item.id === id ?{...item,checked:!item.checked}: item)
setItems(listItems)

localStorage.setItem("todo_list",JSON.stringify(listItems))
} 

const handleDelete=(id)=>{
const listItems = items.filter((item)=>item.id!== id )
setItems(listItems)
}

const addItems=(item)=>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const addItem = {id,checked:false,item}
  const listitems = [...items,addItem]
  setItems(listitems)
  localStorage.setItem("todo_list",JSON.stringify(listitems))
}
const handleSubmit = (e)=>{
  e.preventDefault()
  if(!newItem) return;
  addItems(newItem)
  setNewItem('')
}

  return(
    <div className="App">
      <Header
      title="VASU  LIST"
      />
      <AddItems
      newItem ={newItem}
      SetNewItem ={setNewItem}
      handleSubmit = {handleSubmit}
      />
      <Search
      search ={search}
      setSearch ={setSearch}
      />
      <Content
      items = {items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      setItems={setItems}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer
      length = {items.length} 
      />
    </div>
  )

}
export default App;
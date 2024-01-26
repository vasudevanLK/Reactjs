import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import "./App.css";
import { useState } from "react";
import AddItems from "./AddItems";

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

const [newItem,setNewItem] = useState("")


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

const handleSubmit = (Event)=>{
  e.preventDefault();
  addItems(newItem)
 setNewItem('')
}

const addItems=(item)=>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const addItem = {id,checked:false,item}
  const listitems = [...items,addItem]
  setItems(listitems)
  localStorage.setItem("todo_list",JSON.stringify(listitems))
}

  return(
    <div className="App">
      <Header
      title="VASU  LIST"
      />
      <AddItems
      newItem ={newItem}
      setNewItem ={setNewItem}
      handleSubmit = {handleSubmit}
      />
      <Content
      items={items}
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
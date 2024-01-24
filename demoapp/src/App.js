import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import "./App.css";
import { useState } from "react";

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


  return(
    <div className="App">
      <Header
      title="VASU  LIST"
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
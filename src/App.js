import { useState } from "react";
import AppRoute from "./page/AppRoute";
import Count from './component/Count/Count';

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
  ]);
const [search ,setSearch] = useState('')
const [editId ,setEditId] = useState(null)
const  handleSubmit = ()=> {
  if(search.trim() ==='') return
  if(editId !== null){
    const editData = data.map((val)=> 
      val.id === editId ? {
        ...val,
        name:search
      }:val
    )
    setData(editData)
    setEditId(null)
  } else {
   const newData = {
    id:Date.now(),
    name:search,
   }
   setData([...data,newData])
  }
   setSearch('')
}

const deletButton = (id)=> {
   const update = data.filter((item)=> item.id !== id)
   setData(update)
}
const editItem = (item)=> {
    setSearch(item.name)
    setEditId(item.id)
}
  return (
    <div style={{ width: 400, margin: "20px auto" }}>
      <input name="search" placeholder="search the values" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button style={{ marginLeft: "20px" }} onClick={handleSubmit}>{
        editId !==null ? 'update' : 'post' }
        </button>
      <div style={{ margin: "20px 20px" }}>
        {data.map((val) => (
          <div key={val.id}>
            {val.id}.{val.name}
             <button onClick={()=>editItem(val)} >Edit</button>
             <button onClick={()=>deletButton(val.id)}>Delete</button>
          </div>
         
        ))}
      </div>
      <AppRoute/>
      <Count/>
    </div>

  );
}

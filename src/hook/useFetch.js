import  { useEffect, useState } from 'react'


const useFetch = (url) => {
    
const [data,setData] = useState([])
const [loading ,setLoading] = useState(false)
const [err,setError] = useState(null)

async function getData(){
    setLoading(true)
 try{
    let res = await fetch(url)
    if(!res.ok){
        throw new Error("Api has been failed")
    }
    let result = await res.json()
    setData(result)
 }
 catch(err){
   setError(err.message)
 }
 finally{
    setLoading(false)
 }
}


useEffect(()=> {
   getData()
},[url])
  
return  {data ,loading,err}

}

export default useFetch

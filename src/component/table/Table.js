import React, { useState,useMemo } from 'react'
import useFetch from '../../hook/useFetch'
import useDebounce from '../../hook/useDebounce'

const Table = () => {
const {data,loading , err} = useFetch('https://jsonplaceholder.typicode.com/posts')
const [search,setSearch] = useState('')
const debouncedSearchText = useDebounce(search, 5000);

const filterData = useMemo(()=> {
 return data.filter((val)=> 
    val.title.toLowerCase().includes(debouncedSearchText.toLowerCase())
)
},[data,debouncedSearchText])


  return (
    <div style={{margin:'20px'}}>
    <input type='text' style={{margin:'20px'}} name='search'  value={search} onChange={(e)=> setSearch(e.target.value)}/>
     <table border={'2'}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody>
            {loading && <h5> loading....</h5>}
            {err && <h5 style={{color:'red'}}> {err}</h5>}
            {filterData.map((val) => (
                <tr key={val.id}>
                 <td>{val.id}</td>
                  <td>{val.title}</td>
                </tr>
            ))}
        </tbody>
     </table>
    </div>
  )
}

export default Table

import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading ,setLoading] = useState(false)
  const [err,setErr] = useState('')

  async function getData() {
   setLoading(true)
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Api has been failed");
      }
      const result = await res.json();
      setData(result);
    } catch(err) {
    setErr(err.message)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
getData()
  },[url])

  return {data,loading,err}
};

export default useFetch;

import React, { useState } from 'react'

const EmployeeForm = () => {
const [data ,setData] = useState({
    name:'',
    email:'',
    phoneNumber:'',
    department:''
})
const [error ,setError] = useState({})
const handleChange = (e)=> {
  const {name, value} = e.target;
  setData({
    ...data,
    [name]: value
  })
}

function validation (){
    const newError = {}
   
    if(!data.name.trim()) {
      newError.name = 'Name is required';
    }
    
    if(!data.email.trim()) {
      newError.email = 'Email is required';
    }
    
    if(!data.phoneNumber.trim()) {
      newError.phoneNumber = 'Phone number is required';
    }
    
    if(!data.department.trim()) {
      newError.department = 'Department is required';
    }
    
    return newError;
} 
const handleSubmit =(e)=> {
    e.preventDefault()
    const validationErrors = validation();
    setError(validationErrors);

    if(Object.keys(validationErrors).length === 0){
        alert('form successfully submitted')
    }
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <lable>Name</lable>:
             <input type='text' name='name' value={data.name} onChange={handleChange}  />
             <p style={{color:'red'}}>{error.name}</p>
        </div>
        <br/>
        <div>
            <lable>email</lable>:
             <input type='text' name='email' value= {data.email} onChange={handleChange} />
             <p style={{color:'red'}}>{error.email}</p>
        </div>
        <br/>
        <div>
            <lable>phone number</lable>:
             <input type='text' name='phoneNumber' value={data.phoneNumber} onChange={handleChange} />
             <p style={{color:'red'}}>{error.phoneNumber}</p>
        </div>
<br/>
         <div>
            <lable>Department</lable>:
             <input type='text' name='department' value={data.department} onChange={handleChange} />
             <p style={{color:'red'}}>{error.department}</p>
        </div>
        <br/>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default EmployeeForm
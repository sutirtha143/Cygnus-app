import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({})
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }


  const handleSubmit = async(e) => {
    
  
    e.preventDefault()
    try{  
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json()
      console.log(data);
      if(data.success === false){
        
        setError(data.message)
        return; 
      }
      setError(null)
      navigate('/login');
      
    } catch (error){
  
      setError(error.message)
    }
  }
  
    
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold 
    my-7'>Sign Up</h1>
    <form  onSubmit ={handleSubmit} className='flex flex-col gap-4'>
      <input type="text" placeholder='username'
      className = 'border p-3 rounded-lg' id = 'username'
      onChange={handleChange}/>
      <input type="email" placeholder='email'
      className = 'border p-3 rounded-lg' id = 'email'
      onChange={handleChange}/>
      <input type="password" placeholder='password'
      className = 'border p-3 rounded-lg' id = 'password'
      onChange={handleChange}/>
      <button  className='bg-slate-700 text-white p-3 rounded-lg 
      uppercase hover:opacity-90'>
        Sign Up
      </button>
    </form>
    <div className="flex gap-2 mt-5"> 
      <p>Have an account?</p>
        <Link to='/login'>
        <span className='text-blue-700'>Sign In</span>
        </Link>
    </div>
     {error && <p className='text-red-500 mt-5'>{error}</p>}
  </div>
  )
}

export default SignUp
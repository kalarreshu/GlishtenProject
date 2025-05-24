import React from 'react'
import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const Login = () => {
  const {Login}=useAuth();
  //const navigate = useNavigate();
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(email);
    if(!name.trim()||!email.trim()||!password.trim()){
      alert('Please enter your valid details')
      return
    }
    Login();//set isAuthenticated to true
    navigate('/');//redirect after login   
  }
  
  return (
   <><center>
   <form onSubmit={handleSubmit}>
   <input type='text' placeholder='Username' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
    <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
   <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
 <input type='submit' class='btn'/> 

   </form></center>
   </>
  )
}

export default Login
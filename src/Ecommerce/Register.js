import React, { useState,useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const[name,setName]=useState('')
  const[password,setPassword]=useState('')
  const[email,setEmail]=useState('')

const navigate=useNavigate();

useEffect(()=>{
  if(localStorage.getItem('userData')){
    navigate('/add');
  }
},[])

function handleSubmit(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userData={name,email,password};

   // Convert userData to JSON string
   const userDataJSON = JSON.stringify(userData);

   // Store the JSON string in localStorage
   localStorage.setItem('userData', userDataJSON);

  // axios.post('https://64abbd479edb4181202e6db9.mockapi.io/crud-youtube',{name,email,password})
  // .then(response => {
  //   console.log('Data:', response.data);
   
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });
  navigate('/add')
 
}
  return (

    <>
         <Header/>
         <div className='col-sm-6 offset-sm-3'>
      <br/>
      <form onSubmit={handleSubmit} id='userForm'>
        <label>Name</label>  <br/>
        <input type='text' id='name' onChange={(e)=>setName(e.target.value)}/>  <br/>

        <label>Email</label>  <br/>
        <input type='text' id='email' onChange={(e)=>setEmail(e.target.value)}/>  <br/>

        <label>Password</label>  <br/>
        <input type='text' id='password'  onChange={(e)=>setPassword(e.target.value)}/>  <br/>

        <button >Register</button>

        </form>
      </div>
      </>
  )
}

export default Register



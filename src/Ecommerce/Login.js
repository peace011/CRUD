import React ,{useEffect,useState} from 'react'
import Header from './Header'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

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
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const userData={email,password};
  
     // Convert userData to JSON string
     const userDataJSON = JSON.stringify(userData);
  
     // Store the JSON string in localStorage
     localStorage.setItem('userData', userDataJSON);
  
    axios.post('https://64abbd479edb4181202e6db9.mockapi.io/crud-youtube',{email,password})
    .then(response => {
      console.log('Data:', response.data);
     
    })
    .catch(error => {
      console.error('Error:', error);
    });
    navigate('/add')
  }

  return (

    <div>
         <>
         <Header/>
         <div className='col-sm-6 offset-sm-3'>
      <br/>
      <h1>login page</h1>
      <form onSubmit={handleSubmit} id='userForm'>
       
        <label>Email</label>  <br/>
        <input type='text' id='email' onChange={(e)=>setEmail(e.target.value)}/>  <br/>

        <label>Password</label>  <br/>
        <input type='password' id='password'  onChange={(e)=>setPassword(e.target.value)}/>  <br/>

        <button className='btn-btn-primary'>Login</button>

        </form>
      </div>
      </>

      <form></form>
    </div>
  )
}

export default Login
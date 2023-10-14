import React ,{useEffect} from 'react'
import Header from './Header'
import { Navigate, useNavigate } from 'react-router-dom';

function Protected(props) {

    let Cmp=props.Cmp;
  const navigate=useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('userData')){
      navigate('/register');
    }
  },[])

  return (

    <div>
        <Cmp/>
       

    
    </div>
  )
}

export default Protected
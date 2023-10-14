import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';
// import aaa from './images/aaa.jpg';

function AddProduct() {
  const[name,setName]=useState("");
  const[file,setFile]=useState("");
  const[price,setPrice]=useState("");
  const[description,setDescription]=useState("");
  
  function addProduct(){
    console.log(name,file,price,description);
    const formData=new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);

    console.log('FormData:', formData); // Debug log

    axios.post('https://64abbd479edb4181202e6db9.mockapi.io/add-product', formData
    , {
  headers: {
    'Content-Type': 'multipart/form-data' // Set the correct content type for file uploads
  }
}
)
  .then(response => {
    console.log('Upload successful:', response.data);
  })
  .catch(error => {
    console.error('Upload error:', error);
  });

    

  }
  return (
    <div> 
      <Header/>
      <div className='col-sm-6 offset-sm-3'>
        <br/>
      <input type='text' className='form-control' onChange={(e)=>setName(e.target.value)} placeholder='name'/> <br />
      <input type='file' className='form-control' onChange={(e)=>setFile(e.target.files[0])} placeholder='file'/> <br/>
      <input type='text' className='form-control' onChange={(e)=>setPrice(e.target.value)} placeholder='price'/> <br/>
      <input type='text' className='form-control' onChange={(e)=>setDescription(e.target.value)} placeholder='description'/> <br/>

      <button onClick={addProduct}>Add Product</button>
      </div>

      {/* <img src={aaa} alt='aaa'/> */}
      </div>
  )
}

export default AddProduct

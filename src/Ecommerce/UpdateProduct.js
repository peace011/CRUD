import React ,{useEffect, useState} from 'react'
import Header from './Header'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';


function UpdateProduct() {
  const[name,setName]=useState("");
  const[file,setFile]=useState('');
  const[price,setPrice]=useState("");
  const[description,setDescription]=useState("");

  const Navigate=useNavigate();
  const params=useParams();
  const {id}=params;

  useEffect(() => {
    // Fetch existing product data based on the id
    axios.get(`https://64abbd479edb4181202e6db9.mockapi.io/add-product/${id}`)
      .then((response) => {
        const productData = response.data; // Assuming your API response has the product data
        setName(productData.name);
        setPrice(productData.price);
        setDescription(productData.description);
        // For the file input, you might need a separate mechanism depending on your API
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [id]);

  function handleUpdate(e){
    e.preventDefault();
    axios.put(`https://64abbd479edb4181202e6db9.mockapi.io/add-product/${id}`,{
      name:name,
      file:file,
      price:price,
      description:description,

    })
    .then(resp=>{
      console.log(resp.data);
      Navigate('/');
    })
    .catch(error=>{
      console.error(error);
    })
  }
  return (
    <div>
      <Header/>
      UpdateProduct
      <form onSubmit={handleUpdate} >
 
 <br/>
<input type='text' className='form-control' value={name} onChange={(e)=>setName(e.target.value)} placeholder='name'/> <br />
<input type='file' className='form-control' value={file} onChange={(e)=>setFile(e.target.files[0])} placeholder='file'/> <br/>
{/* <br/>
<p>Selected File: {selectedFileName}</p> */}
<input type='text' className='form-control' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='price'/> <br/>
<input type='text' className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='description'/> <br/>

<button type='submit'>Update Product</button>

</form>
      </div>
  )
}

export default UpdateProduct
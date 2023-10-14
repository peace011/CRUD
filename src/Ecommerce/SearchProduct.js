import React, { useState } from 'react'
import Header from './Header'
import axios from "axios";
import { Table,Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';

function SearchProduct() {

    const {id}=useParams();

    const[data,setData]=useState([])

    function search(key){
        axios.get(`https://64abbd479edb4181202e6db9.mockapi.io/add-product/`+key)
        .then((response) => {
         setData(response.data)// Assuming your API response has the product data
          
          // For the file input, you might need a separate mechanism depending on your API
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
    
  return (
    <>
    <Header/>
    <div className='col-sm-6 offset-sm-3'>
       
          <h1>SearchProduct</h1>
          <br/>
          <input type='text' onChange={(e)=>search(e.target.value)} className='form-control' placeholder='Search product'/>
          </div>


          <h1>Search Product List</h1>
{
    data.length>0?(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Avatar</th>
          <th>createdAt</th>
        </tr>
      </thead>
      <tbody>
      
        {
    data.map((item) => (
        <tr key={item.id}>
                 <td>{item.id}</td>
                 <td>{item.name}</td>
                <td>{item.createdAt}</td>
                <td>{item.avatar}</td>
                <td>
                 {/* <img style={{width:100}} src={"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg"+item.file_path}/> */}
                 {}
                  </td>
                  <td>
               

{/* <Button onClick={() => Navigate('/update/' + item.id)}>Upda</Button> */}

                  </td>
                  
                </tr>
       
    ))
}
</tbody>
</Table>):null}
          </>
  )
}

export default SearchProduct
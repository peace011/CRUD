import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Table,Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

function ProductList() {
  const[name,setName]=useState("");
  const[file,setFile]=useState("");
  const[price,setPrice]=useState("");
  const[description,setDescription]=useState("");
    const[data,setData]=useState([]);

    const Navigate=useNavigate();
useEffect(()=>{
    getData()
},[])

    function getData(){
        axios.get('https://64abbd479edb4181202e6db9.mockapi.io/add-product')
        .then(resp=>{
            console.log(resp.data)
            setData(resp.data)
        })
        .then(error=>{
            console.error(error)
        })
    }

    function handleDelete(id){
      axios.delete(`https://64abbd479edb4181202e6db9.mockapi.io/add-product/${id}`)
      .then(resp=>{
        console.log("Deleted",resp.data);
        getData();
      })
      .catch(error=>{
        console.error(Error);
      })
    }

  

  return (
    <div>
        <Header/>
        <h1>Product List</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
      
        {
    data.map((item) => (
        <tr key={item.id}>
                 <td>{item.id}</td>
                 <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <Button onClick={()=>handleDelete(item.id)} variant='danger'> Delete</Button>
                  </td>
                  <td>
                 <Link to={'update/'+item.id}>Update</Link>

{/* <Button onClick={() => Navigate('/update/' + item.id)}>Upda</Button> */}

                  </td>
                  
                </tr>
       
    ))
}
</tbody>
</Table>


 
    </div>
  )
}

export default ProductList

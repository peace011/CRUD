import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SearchProduct from './Ecommerce/SearchProduct';

import {Button} from 'react-bootstrap'
import Header from './Ecommerce/Header';
import Login from './Ecommerce/Login';
import Register from './Ecommerce/Register';
import AddProduct from './Ecommerce/AddProduct';
import UpdateProduct from './Ecommerce/UpdateProduct';
import Protected from './Ecommerce/Protected';
 import ProductList from './Ecommerce/ProductList';

function App() {
    
  return (
    <div>
      <BrowserRouter>
    
    
     
       
<Routes>
  <Route path='/add' element={<Protected Cmp={AddProduct}/>}/>
  <Route path='/update/:id' element={<Protected Cmp={UpdateProduct}/>}/>
  <Route path='/search' element={<Protected Cmp={SearchProduct}/>}/>

  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/' element={<ProductList/>}/>
</Routes>

  

       </BrowserRouter>
    </div>

  );
}

export default App;



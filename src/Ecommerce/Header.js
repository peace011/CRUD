import React from 'react'
import {Nav,Navbar,Container, NavDropdown} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const user=JSON.parse(localStorage.getItem('userData'));
  console.log(user);

  const navigate=useNavigate();

  function logout(){
    localStorage.clear();
    navigate('/register');
  }
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">

            {
              localStorage.getItem('userData')?
              <>
               <Link to="/add">Add Product</Link>
            <Link to="/update">Update Product</Link>
            <Link to="/"> Product List</Link>
            <Link to="/search"> Search Product</Link>


              </>
              :
              <>
            <Link to="/login">Login Product</Link>
            <Link to="/register">Register</Link>
            </>           
          }

              {/* <Link to="/add">Add Product</Link>
            <Link to="/update">Update Product</Link>
            <Link to="/login">Login Product</Link>
            <Link to="/register">Register</Link> */}
          </Nav>   

          { localStorage.getItem('userData')?
            <Nav>
              <NavDropdown title={user && (user.name||user.email)}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>

              </NavDropdown>
              </Nav>  
              :
                null
              }

       </Container>
     
      </Navbar>
    </div>
  )
}

export default Header
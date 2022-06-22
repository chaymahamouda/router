import React from 'react'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function Navbarr({movie,setText,setRate}) {
 
  return (
    <div className='navv' > <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">MovieApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1"><Link to='/'>Home</Link> </Nav.Link>
          <Nav.Link href="#action2"><Link to='/Contact'>Contact</Link></Nav.Link>
          <Nav.Link href="#action3"><Link to='/'>About</Link></Nav.Link>
          
          <Nav.Link href="#" disabled>
            
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setText(e.target.value)}
          />
         <ReactStars
    count={5}
    onChange={(e)=>setRate(e)}
    size={24}
    activeColor="#ffd700"
  />

        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
</div>


  )
}

export default Navbarr
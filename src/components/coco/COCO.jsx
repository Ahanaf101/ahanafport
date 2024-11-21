import React from 'react'
import "../coco/coco.css"
import { Container,Nav,Navbar,NavDropdown } from 'react-bootstrap'

function COCO() {
  return (
    <Navbar expand="lg " className='sticky  bg-gradient-to-r from-purple-700 to-black '>
    <Container>
      <Navbar.Brand  href="#home" className=' !text-[30px] font-bold hover:!text-purple-300  '>Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='text-black !px-[25px] hover:!text-purple-600 !font-semibold' href="#home">Home</Nav.Link>
          <Nav.Link className='text-black !px-[25px] hover:!text-purple-600  !font-semibold' href="#link">About </Nav.Link>
          <Nav.Link className='text-black !px-[25px] hover:!text-purple-600  !font-semibold' href="#link">Skills</Nav.Link>
          <Nav.Link className='text-black !px-[25px] hover:!text-purple-600  !font-semibold' href="#link">Services</Nav.Link>
          <Nav.Link className='text-black !px-[25px] hover:!text-purple-600  !font-semibold' href="#link">contact</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default COCO
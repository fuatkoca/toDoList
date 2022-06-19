import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Container, NavbarBrand, NavLink, Nav } from 'react-bootstrap'
import './mystyle.css';

const Header = () => {
  return (
    <div>


<Navbar expand="lg" variant="dark" className="color-nav">
  <Container>
  <Navbar.Brand href="#home"> <i className="fa fa-home fa-home fa-2x" ></i> Todoist</Navbar.Brand>
    <Nav className="auto">
      <Nav.Link href="#home"> <i className="fa fa-user fa-user">  </i></Nav.Link>
      <Nav.Link href="#features"><i className="fa fa-bell fa-bell">  </i></Nav.Link>
      <Nav.Link href="#pricing"><i className="fa fa-facebook fa-facebook ">  </i></Nav.Link>
     </Nav>
    
  </Container>
</Navbar>





    </div>
  )
}

export default Header
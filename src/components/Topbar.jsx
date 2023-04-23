import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoBagOutline }  from "react-icons/io5";
import {FaUserAlt}  from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";







function Topbar() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.cart.cartItems);
  const HandleClick=e=>{
    e.preventDefault();
    navigate("/cart");
  
  }

  const NaviGateTohome=e=>{
    e.preventDefault();
    navigate("/");
  
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="transpaent" variant="white" style={{color:"black"}}>
      <Container>
        <Navbar.Brand onClick={NaviGateTohome}>PLASHOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >MEN</Nav.Link>
            <Nav.Link >Women</Nav.Link>
            <Nav.Link >Collection</Nav.Link>
            <Nav.Link >Lookbook</Nav.Link>
            <Nav.Link >Sale</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Our Story</Nav.Link>
            <Nav.Link eventKey={2} href="#memes"> Contact</Nav.Link>
            <Nav.Link onClick={HandleClick}><IoBagOutline style={{fontSize:"20px"}}/> {count.reduce((acc,item)=>{
              return item.qty+acc
            },0)}</Nav.Link>
            <Nav.Link  >< FaUserAlt style={{fontSize:"16px"}}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
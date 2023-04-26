import { Badge, Button, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import { IoBagOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modalcart from "./Modalcart";
import { useState } from "react";
import { CartItem } from "./CartItem";
import { Modalcart1 } from "./Modalcart1";

function Topbar() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.cart.cartItems);
  const HandleClick = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const NaviGateTohome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="transpaent"
      variant="white"
      style={{ color: "black" }}
    >
      <Container
        onClick={console.log("clicked")}
        style={{ position: "relative" }}
      >
        <Navbar.Brand onClick={NaviGateTohome}>PLASHOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>MEN</Nav.Link>
            <Nav.Link>Women</Nav.Link>
            <Nav.Link>Collection</Nav.Link>
            <Nav.Link>Lookbook</Nav.Link>
            <Nav.Link>Sale</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Our Story</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {" "}
              Contact
            </Nav.Link>
            <Nav.Link onClick={handleShow}>
              <IoBagOutline style={{ fontSize: "20px", zIndex: 1 }} />{" "}
              {count.reduce((acc, item) => {
                return item.qty + acc;
              }, 0)}
            </Nav.Link>
            <Nav.Link>
              <FaUserAlt style={{ fontSize: "16px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {show && <Modalcart1 handleShow={handleShow} />}
      </Container>
    </Navbar>
  );
}

export default Topbar;

import React from "react";
import { Container, Button, Row, Col, Stack } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./CartItem";
import { CartItemModal } from "./CartItemModal";
import { useNavigate } from "react-router-dom";
export const Modalcart1 = ({ handleShow }) => {
  const count = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const HandleClick = (e) => {
    e.preventDefault();
    navigate(`/checkout`);
    handleShow();
  };
  const HandleCart = (e) => {
    e.preventDefault();
    navigate(`/cart`);
    handleShow();
  };
  return (
    <Container
      style={{
        display: "block",
        position: "absolute",

        top: "10px",
        right: 0,
        backgroundColor: "white",
       boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        height: "90vh",
        width: "40vw",
        zIndex: 88,
        padding: "35px",
      }}
    >
      <Row md={1}>
        <Col>
          <Stack direction="horizontal" gap={3}>
            <h3>Shopping cart</h3>
            <div className=" border ms-auto">
              {" "}
              <Modal.Dialog>
                <Modal.Header closeButton onClick={handleShow}></Modal.Header>
              </Modal.Dialog>
            </div>
          </Stack>
        </Col>
      </Row>
      <hr />
      <Row md={8} style={{position:"relative"}}>
        <Col style={{overflowY:"scroll", overflowX:"hidden",height:"310px", scrollbarWidth:"2px"}}>
       {count.map(it=><CartItemModal item={it}/>)}
        
          
        </Col>
      </Row>
      <Row md={1}>
        <Col className="mb-5 mt-5">
          <Stack direction="horizontal" gap={3}>
            <h5>Subtotal</h5> <span className=" border ms-auto">$512</span>
          </Stack>
        </Col>
      </Row>
      <Row style={{}} md={2}>
        <Col md={12}>
          <Button
            variant="primary"
            onClick={HandleCart}
            style={{
              textTransform: "uppercase",
              backgroundColor: "#6e7051",
              border: "none",
              lineHeight: "1.5rem",
              letterSpacing: "3px",

              padding: "16px",
              width: "100%",
            }}
          >
            View Cart
          </Button>
        </Col>
        <Col style={{ marginTop: "5px" }} md={12}>
          <Button
            variant="primary"
            onClick={HandleClick}
            style={{
              textTransform: "uppercase",
              backgroundColor: "#6e7051",
              border: "none",
              lineHeight: "1.5rem",
              letterSpacing: "3px",
              padding: "16px",
              width: "100%",
            }}
          >
            CHECKOUT
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

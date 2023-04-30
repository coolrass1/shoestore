import React from 'react'

import { Container, Button, Row, Col, Stack } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./CartItem";
import { CartItemModal } from "./CartItemModal";
import { useNavigate } from "react-router-dom";

export const NoitemCart = ({handleShow}) => {
    const navigate = useNavigate();
  const HandleClick = (e) => {
    e.preventDefault();
    navigate(`/`);
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
        <Col style={{height:"310px", scrollbarWidth:"2px", display:"flex"}}>
      
       <h1> no product in the cart</h1>
          
        </Col>
      </Row>
      <Row md={1}>
        <Col className="mb-5 mt-5">
      
        </Col>
      </Row>
      <Row style={{}} md={2}>
        <Col md={12}>
          
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
          SHOPPING
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

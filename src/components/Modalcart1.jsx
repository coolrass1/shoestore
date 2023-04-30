import React, { useRef, useEffect } from "react";
import { Container, Button, Row, Col, Stack } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import { useSelector} from "react-redux";

import { CartItemModal } from "./CartItemModal";
import { useNavigate } from "react-router-dom";
import { NoitemCart } from "./NoitemCart";
export const Modalcart1 = ({ handleShow }) => {
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleShow();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);
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
  const total = count?.reduce((acc, item) => {
    return item.price * item.qty + acc;
  }, 0);
  if (count.length == 0) return <NoitemCart handleShow={handleShow} />;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 88,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        ref={modalRef}
        style={{
          position: "absolute",

          top: 0,
          right: 0,
          backgroundColor: "white",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          height: "100vh",
          width: "40vw",
          zIndex: 1,
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
        <Row md={8} style={{ position: "relative" }}>
          <Col
            style={{
              overflowY: "scroll",
              overflowX: "hidden",
              height: "310px",
              scrollbarWidth: "2px",
            }}
          >
            {count.map((it) => (
              <CartItemModal item={it} />
            ))}
          </Col>
        </Row>
        <Row md={1}>
          <Col className="mb-5 mt-5">
            <Stack direction="horizontal" gap={3}>
              <h5>Subtotal</h5> <span className="  ms-auto">${total}</span>
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
    </div>
  );
};

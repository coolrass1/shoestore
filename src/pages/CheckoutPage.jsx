import React from "react";
import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import { Orderitem } from "../components/Orderitem";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Formcheckout } from "../components/Formcheckout";
export const CheckoutPage = () => {
  const count = useSelector((state) => state.cart.cartItems);
  
  const total= count.reduce((acc, item) => {
    return item.price * item.qty + acc;
  }, 0)

  return (
    <Container>
      <Row>
        {" "}
        <h1>Checkout</h1>
      </Row>
      <Row>
        <Formcheckout count={count} total={total}/>
        <Col md={4}>
          <h1>Your order</h1>
          <Stack gap={3}>
            <Row>
              <Col>Product</Col>
              <Col>Subtotal</Col>
            </Row>
            <hr />

            {count.map((it) => (
              <Orderitem item={it} />
            ))}
            <Row>
              <Col>Subtotal</Col>
              <Col>
                $
                {count.reduce((acc, item) => {
                  return item.price * item.qty + acc;
                }, 0)}
              </Col>
            </Row>
            <Row>
              <Col>Total</Col>
              <Col>
                $
                {count.reduce((acc, item) => {
                  return item.price * item.qty + acc;
                }, 0)}
              </Col>
            </Row>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

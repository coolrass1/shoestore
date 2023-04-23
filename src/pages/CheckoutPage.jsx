import React from "react";
import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import { Orderitem } from "../components/Orderitem";
import { useSelector, useDispatch } from "react-redux";
export const CheckoutPage = () => {



  const count = useSelector((state) => state.cart.cartItems);
  return (
    <Container>
      <Row>
        {" "}
        <h1>Checkout</h1>
      </Row>
      <Row>
        <Col md={8}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-1"> Customer information </Form.Label>
              <Form.Control
                type="email"
                placeholder="Username or Email address"
              />
            </Form.Group>
            <h2>Billing details</h2>
            <Row>
              <Col>
                {" "}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="text-1">
                    {" "}
                    Customer information{" "}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Username or Email address"
                  />
                </Form.Group>
              </Col>{" "}
              <Col>
                {" "}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="text-1">
                    {" "}
                    Customer information{" "}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Username or Email address"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder=" Company name " />
            </Form.Group>
            <Form.Select aria-label="Contry region">
              <option>Contry region</option>
              <option value="1">USA</option>
              <option value="2">FRANCE</option>
              <option value="3">UK</option>
            </Form.Select>
            <Row className="mt-3">
              <Col>
                {" "}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="House number" />
                </Form.Group>
              </Col>{" "}
              <Col>
                {" "}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="Street number" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Phone number" />
              <Row>
                <Button
                  style={{
                    textTransform: "uppercase",
                    backgroundColor: "#6e7051",
                    border: "none",
                    lineHeight: "1.5rem",
                    letterSpacing: "3px",
                    padding: "25px 1px",
                    marginTop: "2em",
                  }}
                >
                  Place an order
                </Button>
              </Row>
            </Form.Group>
          </Form>
        </Col>
        <Col md={4}>
          <h1>Your order</h1>
          <Stack gap={3}>
          <Row>
            <Col>Product</Col>
            <Col>Subtotal</Col>
        
          </Row>
          <hr/>
         
          {count.map((it)=><Orderitem item={it}/>)}
          <Row>
            <Col>Subtotal</Col>
            <Col>${count.reduce((acc,item)=>{return item.price*item.qty+acc},0)}</Col>
          </Row>
          <Row>
            <Col>Total</Col>
            <Col >${count.reduce((acc,item)=>{return item.price*item.qty+acc},0)}</Col>
          </Row>

          </Stack>
        </Col>
      </Row>

    </Container>
  );
};

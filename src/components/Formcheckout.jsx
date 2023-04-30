import React, { useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import axios from "axios";

export const Formcheckout = ({ count, total}) => {
  const [formorder, setFormorder] = useState({
    fullname: "",
    customerName: "",
    companyname: "",
    country: "",
    customerAddress: "",
    street_number: "",
    phone_number: "",


  });
  
  const url = "http://localhost:8080/api/v1/order/place";
  const HandleSubmit = (e) => {
   
    e.preventDefault();
   
  
      
   
  const placeorder = { orderDetails: count, ...formorder, total };
     axios.post(url, placeorder).then((response) => {
     console.log(response);
    });
   console.log(placeorder);
  };
  const HandleChange = (e) => {
    setFormorder({ ...formorder, [e.target.name]: e.target.value });
  };
  return (
    <Col md={8}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-1"> Customer information </Form.Label>
          <Form.Control
            type="text"
            placeholder="Username or Email address"
            name="fullname"
            onChange={HandleChange}
          />
        </Form.Group>
        <h2>Billing details</h2>
        <Row>
          <Col>
            {" "}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-1"> Customer information </Form.Label>
              <Form.Control
                type="email"
                placeholder="Username or Email address"
                name="customerName"
                onChange={HandleChange}
              />
            </Form.Group>
          </Col>{" "}
          <Col>
            {" "}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-1"> Customer information </Form.Label>
              <Form.Control
                type="email"
                placeholder="Username or Email address"
                onChange={HandleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            name="companyname"
            type="text"
            placeholder=" Company name "
            onChange={HandleChange}
          />
        </Form.Group>
        <Form.Select name="Contry" aria-label="Contry region">
          <option>Contry region</option>
          <option value="1">USA</option>
          <option value="2">FRANCE</option>
          <option value="3">UK</option>
        </Form.Select>
        <Row className="mt-3">
          <Col>
            {" "}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="customerAddress"
                placeholder="House number"
                onChange={HandleChange}
              />
            </Form.Group>
          </Col>{" "}
          <Col>
            {" "}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={HandleChange}
                name="street_number"
                type="text"
                placeholder="Street number"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            name="phone_number"
            placeholder="Phone number"
            onChange={HandleChange}
          />
          <Row>
            <Button
              onClick={HandleSubmit}
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
  );
};

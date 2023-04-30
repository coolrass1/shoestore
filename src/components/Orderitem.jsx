import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";

export const Orderitem = ({ item }) => {
  return (
    <Row>
      <Col md={2}>
        <Image
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={item.shoe.imageUrl}
        />
      </Col>
      <Col> {item.shoe.shoename}</Col>
      <Col>{item.qty}x{item.price}</Col>
    </Row>
  );
};

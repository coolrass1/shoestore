import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { decrementcart,incrementcart, RemoveItemcart } from "../reducers/cartslice";
import { useSelector, useDispatch } from "react-redux";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const HandleClick=e=>{
    e.preventDefault()
    dispatch(decrementcart(item))

  }
  const Increment=e=>{
    e.preventDefault()

    dispatch(incrementcart(item))

  }


  const   RemoveItem=e=>{
    e.preventDefault()
 
    dispatch(  RemoveItemcart(item))

  }
  return (
    <Row style={{ marginBottom: "1em" }}>
      <Col md={2}>
        <Image
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={item.shoe.imageUrl}
          rounded
        />
      </Col>
      <Col md={2}> {item.shoe.shoename}</Col>
      <Col md={2}>{item.price}</Col>
      <Col md={3}>
        {" "}
        <Button onClick={HandleClick}variant="outline-info">-</Button>{" "}
        <input
          type="text"
          value={item.qty}
          style={{ outline: "none", border: "none", width: "20px" }}
        />
        <Button onClick={Increment}variant="outline-info">+</Button>
      </Col>
      <Col md={2}>{parseInt(item.qty*item.price)}</Col>
      <Col md={1}><Button onClick={RemoveItem} style={{backgroundColor:"white", color:"black"}}>X</Button></Col>
    </Row>
  );
};

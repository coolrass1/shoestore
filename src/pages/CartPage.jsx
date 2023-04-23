import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CartItem } from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const CartPage = () => {
    const navigate = useNavigate();
    const items= useSelector((state) => state.cart.cartItems);
    const total=items.reduce((acc,item)=>{return item.price*item.qty+acc},0)
  const HandleClick=e=>{
    e.preventDefault();
    navigate("/checkout");
  
  }
  return (
    <Container>
      <h1>Cart</h1>
      <Row style={{color:"#7A7A7A"}}>
        <Col md={8}>
          <Row style={{backgroundColor:"#EEEEEE", padding:"20px", marginBottom:"20px"}}>
            <Col md={4} style={{textAlign:"center"}}>Product</Col>
            <Col>Price</Col>
            <Col>Quantity</Col>
            <Col>Subtotal</Col>
          </Row>
     
          {items.map((it)=><CartItem item={it}/>)}
        </Col>
        <Col md={3} style={{marginLeft:"20px"}}>
          <Row style={{backgroundColor:"#EEEEEE", padding:"20px"}}>Cart totals</Row>
          <Row style={{padding:"20px",marginTop:"1px", marginBottom:"5px"}}>
            <Col sm={6}>Subtotal</Col> <Col sm={6}>{total}</Col>{" "}
           
          </Row>
          <hr/>
          <Row style={{ padding:"20px",marginTop:"1px"}}>
            <Col sm={6}>Total</Col> <Col sm={6}>{total}</Col>
          </Row>
          <hr/>
          <Row style={{ padding:"20px",marginTop:"20px"}}>
            <p>Have acoupon?</p>
            <Button onClick={HandleClick}  style={{ border:"none",backgroundColor:"#6e7051",padding:"40px",marginTop:"20px", fontSize:"25px", textTransform:"uppercase"}} >Proceed to checkout</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;

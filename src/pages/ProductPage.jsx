import React, { useState } from 'react'
import {   useGetShoeQuery } from '../rtk/shoes'
import { useNavigate,  useParams, } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTocart } from "../reducers/cartslice";
import { FcApproval } from 'react-icons/fc';
import { Button, Col, Container, Image, Row, Stack, Form, Alert, CloseButton } from 'react-bootstrap';
export const ProductPage = () => {
  const navigate = useNavigate();
 
  const [iscart, setIscart]=useState(false)
  const [qty, setQty]=useState(1)
    const dispatch = useDispatch();
    const HandleCart = () => {
  console.log("fff")
      navigate(`/cart`);
      handleShow();
    }
   


    const{data:oneshoe,isLoading}=useGetShoeQuery(useParams().id)
    console.log(oneshoe)
   // const [id,shoename]=0
    //const mypayload={shoe:{id:oneshoe.id,shoename:oneshoe.shoename,description:oneshoe.description, imageUrl:oneshoe.imageUrl},

   // price:oneshoe.price}
   // console.log(mypayload)

    const AddTocart = (e) => {
      if (qty<2) setQty(1)
         
              dispatch(addTocart({...oneshoe, qty:qty}));
              
              setIscart(true)
            };

    if(isLoading) return(<div>isloading</div>)
  return (
    <Container>
      {iscart && <Row><Col>    <Stack direction="horizontal" gap={3} className="bg p-3">
     
  <h5>< FcApproval/> “{oneshoe.name}” has been added to your cart. </h5>
  <Button className=" ms-auto"
            variant="primary"
            onClick={HandleCart}
            style={{
              textTransform: "uppercase",
              backgroundColor: "#6e7051",
              border: "none",
              lineHeight: "1.5rem",
              letterSpacing: "3px",
              marginLeft: "16px",
            }}
          >
           ViewCart
          </Button>
    </Stack ></Col></Row>}
      <Row style={{ marginTop: "60px" }}>
        <Col md={6}>
          <Image
            className="shadow-sm"
            style={{ height: "90%", width: "90%", objectFit: "cover" }}
            src={oneshoe.shoe.imageUrl}
          ></Image>
        </Col>
        <Col>
          <Stack gap={3}>
            <h5>{oneshoe.shoe.name}</h5>
            <h2>{}</h2>
            <h3>{oneshoe.shoe.price} & Free Shipping</h3>
            <p>{oneshoe.shoe.description}</p>
          </Stack>
          <Button onClick={e=>qty<2?setQty(1):setQty(qty-1)} variant="outline-info">-</Button>{" "}
        
     
        {qty}
          <Button variant="outline-info" onClick={e=>setQty(qty+1)}>+</Button>
        
          <Button
            variant="primary"
            onClick={AddTocart}
            style={{
              textTransform: "uppercase",
              backgroundColor: "#6e7051",
              border: "none",
              lineHeight: "1.5rem",
              letterSpacing: "3px",
              marginLeft: "16px",
            }}
          >
            Add To CART
          </Button>
          <Row style={{ marginTop: "25px" }}>
            <hr />
            Categories: Men, Sneaker
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

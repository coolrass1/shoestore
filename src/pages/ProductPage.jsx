import React from 'react'
import {   useGetShoeQuery } from '../rtk/shoes'
import { useNavigate,  useParams, } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTocart } from "../reducers/cartslice";
import { Button, Col, Container, Image, Row, Stack, Form } from 'react-bootstrap';
export const ProductPage = () => {
    const dispatch = useDispatch();
    const AddTocart = (e) => {
        dispatch(addTocart({...oneshoe, qty:1}));
      };
    const navigate = useNavigate();

    const{data:oneshoe,isLoading}=useGetShoeQuery(useParams().id)

    if(isLoading) return(<div>isloading</div>)
  return (
    <Container>
      <Row style={{ marginTop: "60px" }}>
        <Col md={6}>
          <Image
            className="shadow-sm"
            style={{ height: "90%", width: "90%", objectFit: "cover" }}
            src={oneshoe.imageUrl}
          ></Image>
        </Col>
        <Col>
          <Stack gap={3}>
            <h5>{oneshoe.name}</h5>
            <h2>{oneshoe.name}</h2>
            <h3>{oneshoe.price} & Free Shipping</h3>
            <p>{oneshoe.description}</p>
          </Stack>
          <Button variant="outline-info">-</Button>{" "}
        
     
        <Form.Control type="text"
        style={{ outline: "none", border: "none", width: "20px" , display:"inline"}}
         placeholder="Normal text"
         defaultValue={1} 
         onChange={e=>e.target.value}/>
          <Button variant="outline-info">+</Button>
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

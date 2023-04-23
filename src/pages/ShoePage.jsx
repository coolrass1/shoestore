import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,

  Image,
  Row,
  Spinner,
  Stack,
} from "react-bootstrap";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTocart } from "../reducers/cartslice";
import { useNavigate } from "react-router-dom";
const ShoePage = () => {
  const navigate = useNavigate();
  
  const post = useSelector((state) => state.shoes);
  console.log(post)
  const dispatch = useDispatch();
  const AddTocart = (e) => {
    dispatch(addTocart({...oneshoe, qty:1}));
  };
  const HandleChange=(e) => {
  console.log(e.value)
  };
  console.log(useParams().id);
  const url = `http://localhost:8080/api/v1/shoe/${useParams().id}`;
  const [isloading, setIsloading] = useState(true);
  const [oneshoe, setOneshoe] = useState("");
  const myshoe= post.entities.find(tt=>tt.id==useParams().id)
  if(!myshoe)navigate(`/`);
  console.log(myshoe)
  useEffect(() => {

    setIsloading(false);
    setOneshoe(myshoe);
    /*axios.get(url).then((res) => {
      setOneshoe(res.data);
      setIsloading(false);
      console.log(oneshoe);
    });*/
  }, []);
  if (isloading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
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
         onChange={HandleChange}/>
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
};

export default ShoePage;

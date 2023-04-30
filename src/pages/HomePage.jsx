import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { Shoe } from "../components/Shoe";
import Select from "../components/Select";
import { FiAlignJustify } from "react-icons/fi";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getShoes } from "../reducers/shoes";

const HomePage = () => {
  const [listshoe, setListshoe] = useState([]);
  const[isloading , setIsloading]=useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
      //dispatch(getPosts());
      dispatch(getShoes())
    }, [dispatch]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/shoe/list")
      .then((res) => {setListshoe(res.data); setIsloading(false) });
     // console.log(listshoe)
  }, []);
  const post = useSelector((state) => state.shoes);

 
  if(post.loading) return(  <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>) 
  return (
    <Row>
      <Row style={{ fontSize: "65px", marginBottom: "35px" }}>Men</Row>
      <Row>
        <Col md={4}>
          <Button
            variant="primary"
            style={{
              textTransform: "uppercase",
              backgroundColor: "#6e7051",
              border: "none",
              lineHeight: "1.5rem",
              letterSpacing: "3px",
            }}
          >
            <FiAlignJustify style={{ fontSize: "20px", marginRight: "5px" }} />
            Filter Shoes
          </Button>
          <span style={{ marginLeft: "10px" }}>Showing all 8 results</span>
        </Col>
        <Col md={2}></Col>
        <Col md={3}></Col>
        <Col md={3}>
          <Select />
        </Col>
      </Row>

      <Row style={{ marginTop: "35px" }}>
        {post.entities.map((u) => (
          <Shoe key={JSON.stringify(u)}u={u} />
        ))}
      </Row>
    </Row>
  );
};

export default HomePage;

import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export const Shoe = ({u}) => {
  const navigate = useNavigate();
  const HandleClick=e=>{
    e.preventDefault();
    navigate(`/shoes/${u.id}`);
  
  }
  return (
    <Col xs={12} md={6} lg={3}style={{marginTop:"8px"}}>

<Card  className="shadow" onClick={HandleClick}>
      <Card.Img variant="top" src={u.imageUrl} />
      <Card.Body>
        <Card.Title>{u.name}</Card.Title>
        <Card.Text>
          {u.description}
        </Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

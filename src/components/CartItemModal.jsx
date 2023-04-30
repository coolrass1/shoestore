import React from "react";
import { Button, Col, Image, Row, Stack } from "react-bootstrap";
import {
  decrementcart,
  incrementcart,
  RemoveItemcart,
} from "../reducers/cartslice";
import { useSelector, useDispatch } from "react-redux";

export const CartItemModal = ({ item }) => {
  const dispatch = useDispatch();
  const HandleClick = (e) => {
    e.preventDefault();
    dispatch(decrementcart(item));
  };
  const Increment = (e) => {
    e.preventDefault();

    dispatch(incrementcart(item));
  };

  const RemoveItem = (e) => {
    e.preventDefault();

    dispatch(RemoveItemcart(item));
  };
  return (
    <>
      <Row style={{ marginBottom: "1em" }}>
        <Col style={{ height: "80px" }}>
          <Stack direction="horizontal" gap={3}>
            <Stack direction="horizontal" gap={3}>
              <div style={{ height: "80px" }}>
                {" "}
                <Image
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  src={item.imageUrl}
                  rounded
                />
              </div>
              <Stack direction="vertical" gap={1}>
                <h5>{item.shoename}</h5>
                <div>
                  <Button
                    style={{
                      fontSize: "15px",
                      padding: "2px 15px",
                      border: "1px solid gray",
                      color: "gray",
                    }}
                    onClick={HandleClick}
                    variant="outline-info"
                  >
                    -
                  </Button>{" "}
                  <input
                    type="text"
                    value={item.qty}
                    style={{ outline: "none", border: "none", width: "20px" }}
                  />
                  <Button
                    style={{
                      color: "gray",
                      fontSize: "15px",
                      padding: "2px 15px",
                      border: "1px solid gray",
                    }}
                    onClick={Increment}
                    variant="outline-info"
                  >
                    +
                  </Button>
                </div>
              </Stack>
            </Stack>
            <div className=" ms-auto">
              <Button
                onClick={RemoveItem}
                style={{
                  fontSize: "15px",
                  padding: "2px",
                  backgroundColor: "white",
                  border: "none",
                  color: "black",
                }}
              >
                X
              </Button>
              <h5 style={{ fontSize: "15px", marginTop: "6px" }}>
                ${item.qty * item.price}
              </h5>
            </div>
          </Stack>
        </Col>
      </Row>
      <hr />
    </>
  );
};

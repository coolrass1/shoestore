import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Row>
        <Topbar />
      </Row>
      <Container>
        {" "}
        <Outlet />
      </Container>
    </>
  );
};

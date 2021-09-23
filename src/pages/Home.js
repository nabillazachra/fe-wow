import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Navigation />
        </Col>
        <Col>text</Col>
      </Row>
    </Container>
  );
}

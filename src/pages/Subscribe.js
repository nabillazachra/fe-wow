import React from "react";
import { Container, Col, Form, Card } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Wow from "../assets/img/Wow.png";
import Attach from "../assets/img/Vector.png";

export default function Subscribe() {
  return (
    <>
      <Container>
        <Col>
          <Navigation />
        </Col>
        <Col>
          <div className="cont text-center">
            <div className="dc text-center">
              <h1 className="mb-5">Premium</h1>
              <p>
                Pay now and access all the latest books from
                <img src={Wow} alt="" />
              </p>
              <span>
                <img src={Wow} alt="" />
                <span className="fw-bold">: 0981312323</span>
              </span>
              <Form className="mt-3">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Input your account number"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="file"
                    hidden
                    id="file"
                    aria-label="File browser example"
                  />
                  <label for="file">
                    <Card style={{ height: "40px", width: "25rem" }}>
                      <Card.Body style={{ marginTop: "-10px" }}>
                        <span className="me-5 text-start text-danger fw-bold p-e">
                          Attache proof of transfer
                        </span>
                        <span className="ms-5">
                          <img src={Attach} alt="" />
                        </span>
                      </Card.Body>
                    </Card>
                  </label>
                </Form.Group>
                <button className="btn-reg auto mt-5" type="submit">
                  Send
                </button>
              </Form>
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
}

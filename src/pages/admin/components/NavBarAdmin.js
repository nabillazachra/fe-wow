import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Wow from "../../../assets/img/Icon.png";
import { Link } from "react-router-dom";
import NavDown from "./NavDown";

export default function NavBarAdmin(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <section>
              <nav className="d-flex mt-3 flex-row justify-content-between">
                <Link to="/home">
                  <img src={Wow} className="wow rotate" alt="home" />
                </Link>
                <div>
                  <NavDown />
                </div>
              </nav>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}

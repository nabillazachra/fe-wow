import React, { useState, useContext } from "react";
import { Modal, Form } from "react-bootstrap";
import { useHistory } from "react-router";

import { UserContext } from "../context/userContext";

function ModalLogin(props) {
  let history = useHistory();

  const [state, dispatch] = useContext(UserContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
      isLogin: true,
      email,
      password,
      fullname: "Fullname",
    };

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });

    if (data.email !== "" && data.password !== "") {
      data.isLogin = true;
      history.push("/home");
    }
  };

  return (
    <div>
      <Modal {...props} centered size="sm">
        <Modal.Body>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="mb-4 fw-bold"
          >
            Sign In
          </Modal.Title>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </Form.Group>
            <button className="btn-reg auto w-100 mb-3" type="submit">
              Sign In
            </button>
            <p className="text-center">
              Don't have an account? Klik
              <span
                className="fw-bold p-e"
                onClick={() => props.onRedirectRegis()}
              >
                &nbsp;Here
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function ModalRegister(props) {
  let history = useHistory();

  const [state, dispatch] = useContext(UserContext);

  const handleRegistSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fullname = document.getElementById("fullname").value;

    const data = {
      isLogin: true,
      email,
      password,
      fullname,
    };

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });

    if (data.email !== "" && data.password !== "") {
      data.isLogin = true;
      history.push("/home");
    }
  };

  return (
    <div>
      <Modal {...props} centered size="sm">
        <Modal.Body>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="mb-4 fw-bold"
          >
            Sign Up
          </Modal.Title>
          <Form onSubmit={handleRegistSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                name="email"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                name="fullname"
                type="fullname"
                id="fullname"
                placeholder="Fullname"
                required
              />
            </Form.Group>
            <button className="btn-reg auto w-100 mb-3" type="submit">
              Sign Up
            </button>
            <p className="text-center">
              Already have an account? Klik
              <span
                className="fw-bold p-e"
                onClick={() => props.onRedirectLogin()}
              >
                &nbsp;Here
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default function BtnGroup() {
  const [modalReg, setModalReg] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  const RedirectToLogin = () => {
    setModalReg(false);
    setModalLogin(true);
  };

  const RedirectToRegis = () => {
    setModalReg(true);
    setModalLogin(false);
  };

  return (
    <div className="btn-group">
      <button
        className="btn-reg radius ws fw-bold"
        onClick={() => setModalReg(true)}
      >
        Sign Up
      </button>
      <ModalRegister
        show={modalReg}
        onHide={() => setModalReg(false)}
        onRedirectLogin={RedirectToLogin}
      />
      <button
        className="btn-login radius ws fw-bold"
        onClick={() => setModalLogin(true)}
      >
        Sign In
      </button>
      <ModalLogin
        show={modalLogin}
        onHide={() => setModalLogin(false)}
        onRedirectRegis={RedirectToRegis}
      />
    </div>
  );
}

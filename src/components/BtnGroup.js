import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { useHistory } from "react-router";

function ModalLogin(props) {
  let history = useHistory();

  const handleLink = () => {
    history.push("/home");
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="email" id="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                id="password"
                placeholder="Password"
              />
            </Form.Group>
            <button
              className="btn-reg auto mb-3"
              type="submit"
              onClick={handleLink}
            >
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

  const handleLink = () => {
    history.push("/home");
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="email" id="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                id="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="fullname"
                id="fullname"
                placeholder="Fullname"
              />
            </Form.Group>
            <button
              className="btn-reg auto mb-3"
              type="submit"
              onClick={handleLink}
            >
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

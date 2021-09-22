import React from "react";
import { Modal, Form } from "react-bootstrap";
import { useHistory } from "react-router";

export default function ModalRegister(props) {
  let history = useHistory();

  const handleLink = () => {
    history.push("/");
  };

  return (
    <div>
      <Modal {...props} centered size="sm">
        <Modal.Body>
          <Modal.Title id="contained-modal-title-vcenter" className="mb-4">
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
            <Form.Group className="mb-3">
              <Form.Control
                type="fullname"
                id="fullname"
                placeholder="Fullname"
              />
            </Form.Group>
            <button className="btn-reg auto" type="submit" onClick={handleLink}>
              Sign Up
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

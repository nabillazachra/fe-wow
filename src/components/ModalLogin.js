import React from "react";
import { Modal, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function ModalLogin(props) {
  let history = useHistory();

  const handleLink = () => {
    history.push("/");
  };

  return (
    <div>
      <Modal {...props} centered size="sm">
        <Modal.Body>
          <Modal.Title id="contained-modal-title-vcenter" className="mb-4">
            Sign In
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
            <button className="btn-reg auto" type="submit" onClick={handleLink}>
              Sign In
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

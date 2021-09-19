import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";
import { Key } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export default function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Button tooltip="Login" onClick={handleShow} variant="link">
          <Key size={20} />
          Login
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-light text-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

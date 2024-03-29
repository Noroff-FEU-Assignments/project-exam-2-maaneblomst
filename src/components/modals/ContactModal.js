import { useState } from "react";
import ContactForm from "../forms/ContactForm";
import { Container, Button } from "react-floating-action-button";
import { Envelope } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export default function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Button
          tooltip="Contact us"
          rotate={true}
          onClick={handleShow}
          className="bg-primary"
          role="button"
          aria-label="contact button"
        >
          <Envelope size={30} />
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Contact us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm />
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

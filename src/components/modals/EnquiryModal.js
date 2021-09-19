import { useState } from "react";
import EnquiryForm from "../forms/EnquiryForm";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-floating-action-button";

export default function EnquiryModal({ id, name }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        tooltip="Contact us"
        rotate={true}
        onClick={handleShow}
        className="bg-primary"
      >
        Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Book your next stay at {name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EnquiryForm id={id} name={name} />
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

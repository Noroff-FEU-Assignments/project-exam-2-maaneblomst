import { Container, Button } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddNew from "../forms/AddNew";

export default function AddModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Button
          tooltip="Add new accommodation"
          onClick={handleShow}
          className="bg-primary text-white"
        >
          <Plus size={30} />
          Add new
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add new accommodation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNew />
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

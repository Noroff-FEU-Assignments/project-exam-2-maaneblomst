import { useState } from "react";
import EditAccommodation from "../../forms/EditAccomodation";
import { Button } from "react-bootstrap";
import { Pen } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export default function EditModal({
  id,
  name,
  description,
  price,
  popular,
  images,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="link"
        className="text-decoration-none"
        role="button"
        onClick={handleShow}
      >
        <Pen className="m-1" />
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditAccommodation
            id={id}
            name={name}
            description={description}
            price={price}
            popular={popular}
            images={images}
          />
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

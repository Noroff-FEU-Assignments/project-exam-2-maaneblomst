import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import Container from "react-bootstrap/Container";
import { Button, darkColors, lightColors } from "react-floating-action-button";
import { Trash } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export function DeleteMessage({ id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL + "messages" + "/" + id;
  const http = useAxios();

  function deleteItem() {
    console.log("delete item " + id);
  }

  return (
    <Container>
      <Button
        tooltip="Delete message"
        rotate={true}
        className="bg-primary"
        onClick={handleShow}
      >
        <Trash />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this message?</p>
          <Container>
            <Button
              rotate={true}
              styles={{
                backgroundColor: darkColors.green,
                color: lightColors.white,
              }}
              onClick={deleteItem}
            >
              Yes
            </Button>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-light text-dark" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

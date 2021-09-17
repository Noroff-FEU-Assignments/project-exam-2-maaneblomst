import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import Container from "react-bootstrap/Container";
import { Button, darkColors, lightColors } from "react-floating-action-button";
import { Trash } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export function DeleteMessage({ id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [error, setError] = useState(null);

  const http = useAxios();
  const history = useHistory();
  const url = BASE_URL + "messages/" + id;

  async function handleDelete() {
    console.log("request sending");
    try {
      await http.delete(url);
      console.log("deleted id " + id);
      history.push("/messages");
      setShow(false);
    } catch (error) {
      setError(error);
    }
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
              onClick={handleDelete}
            >
              {error ? "Error" : "Yes"}
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

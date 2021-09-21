import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { Trash } from "react-bootstrap-icons";

export function DeleteEnquiry({ id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [error, setError] = useState(null);

  const http = useAxios();
  const history = useHistory();
  const url = BASE_URL + "enquiries/" + id;

  async function handleDelete() {
    console.log("request sending");
    try {
      await http.delete(url);
      console.log("deleted id " + id);
      setTimeout(function () {
        history.go();
      }, 3000);
      setShow(false);
    } catch (error) {
      setError(error);
    }
  }
  return (
    <>
      <Button variant="link" className="text-danger" onClick={handleShow}>
        <Trash />
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete this enquiry? It will be gone
            forever!
          </p>
          <Container>
            <Button onClick={handleDelete}>{error ? "Error" : "Yes"}</Button>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-light text-dark" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

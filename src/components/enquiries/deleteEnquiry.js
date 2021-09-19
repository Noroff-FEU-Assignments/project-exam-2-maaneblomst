import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import { Button, darkColors, lightColors } from "react-floating-action-button";
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
      history.push("/adminenquiries");
      setShow(false);
    } catch (error) {
      setError(error);
    }
  }
  return (
    <Container>
      <Button
        tooltip="Delete enquiry"
        rotate={true}
        className="bg-primary"
        onClick={handleShow}
      >
        <Trash />
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

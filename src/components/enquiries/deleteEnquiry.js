import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import { Trash, EmojiFrown } from "react-bootstrap-icons";
import DisplayAlert from "../common/DisplayAlert";

export function DeleteEnquiry({ id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const http = useAxios();
  const history = useHistory();
  const url = BASE_URL + "enquiries/" + id;

  async function handleDelete() {
    setLoading(true);
    try {
      await http.delete(url);
      setTimeout(function () {
        history.go();
      }, 1800);
      setShow(false);
    } catch (error) {
      setSubmissionError(error.toString());
    }
  }
  if (loading)
    return (
      <Container>
        <Spinner
          animation="border"
          role="status"
          variant="primary"
          className="d-block"
        />
        Deleting..
      </Container>
    );
  if (submissionError)
    return (
      <DisplayAlert variant="danger">
        <EmojiFrown className="d-block" />
        We're so sorry. Something wrong happened.
        <br />
        {submissionError}
      </DisplayAlert>
    );
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
            Are you sure you want to delete this enquiry?
            <br />
            It will be gone forever!
          </p>
          <Container>
            <Button variant="outline-success" onClick={handleDelete}>
              Thanks, delete it
            </Button>
            <Button
              variant="outline-danger"
              onClick={handleClose}
              className="m-2"
            >
              Abort mission!
            </Button>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

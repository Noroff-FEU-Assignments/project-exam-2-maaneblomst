import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import Loading from "../common/formfeedback/Loading";
import SubmissionError from "../common/formfeedback/SubmissionError";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { Trash } from "react-bootstrap-icons";

export function DeleteEnquiry({ id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const http = useAxios();
  const url = BASE_URL + "enquiries/" + id;

  async function handleDelete() {
    setLoading(true);
    try {
      await http.delete(url);
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setSubmissionError(error.toString());
    }
  }
  if (loading)
    return (
      <Loading
        animation="border"
        variant="primary"
        classname="d-block"
        statusText="Deleting.."
      />
    );
  if (submissionError)
    return (
      <SubmissionError
        variant="danger"
        displayText="We're so sorry. Something went wrong."
        error={submissionError}
      />
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

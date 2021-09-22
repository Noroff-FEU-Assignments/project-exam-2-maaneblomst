import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import useAxios from "../../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import { DeleteEnquiry } from "./deleteEnquiry";
import Container from "react-bootstrap/Container";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Reply } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Loading from "../common/formfeedback/Loading";
import SubmissionError from "../common/formfeedback/SubmissionError";

export function EnquiriesList() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL + "enquiries";

  const http = useAxios();

  useEffect(function () {
    async function getEnquiries() {
      try {
        const response = await http.get(url);
        setEnquiries(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getEnquiries();
    console.log(enquiries);
    // eslint-disable-next-line
  }, []);

  if (loading)
    return (
      <Loading
        animation="border"
        variant="primary"
        classname="d-block"
        statusText="Loading enquiries.."
      />
    );
  if (error)
    return (
      <SubmissionError
        variant="danger"
        displayText="We're so sorry. Something went wrong."
        error={error}
      />
    );
  enquiries.sort(function (date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return enquiries;
  });

  return (
    <Container className="enquiries">
      {enquiries.map((request) => {
        const name = request.name;
        const id = request.id;
        const email = request.email;
        const dateFrom = request.date_from;
        const dateTo = request.date_to;
        const accommodation = request.accommodation;
        const message = request.message;
        const created = request.created_at;

        function dateFormatter() {
          let formattedDate = moment(created).format("DD/MM/YYYY");
          return formattedDate;
        }

        return (
          <ListGroupItem key={id}>
            <Container>
              <Row>
                <span className="fw-bold">
                  Created at: {dateFormatter(created)}
                </span>
              </Row>
              <Row>
                <Container>
                  <span className="fw-bold">Name: </span>
                  <span>{name}</span> <br />
                  <span className="fw-bold">E-mail: </span>
                  <span>{email}</span>
                </Container>
              </Row>
              <Row>
                <Container>
                  <span className="fw-bold">From: </span>
                  {dateFrom}
                  <br />
                  <span className="fw-bold">To: </span>
                  {dateTo}
                </Container>
              </Row>
              <Row>
                <Container>
                  <span className="fw-bold">Accommodation: </span>
                  {accommodation} <br />
                  <span className="fw-bold">Message:</span>
                  <span>{message}</span>
                </Container>
              </Row>
            </Container>
            <Container>
              <Button
                variant="link"
                as={Link}
                to={{ pathname: "mailto:" + email }}
              >
                <Reply />
                Reply
              </Button>
              <DeleteEnquiry id={id} />
            </Container>
          </ListGroupItem>
        );
      })}
    </Container>
  );
}

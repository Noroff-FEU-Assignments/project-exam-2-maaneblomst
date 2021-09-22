import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import moment from "moment";
import { BASE_URL } from "../../constants/Api";
import { DeleteMessage } from "./deleteMessage";
import Loading from "../common/formfeedback/Loading";
import SubmissionError from "../common/formfeedback/SubmissionError";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Reply } from "react-bootstrap-icons";

export function MessagesList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL + "messages";

  const http = useAxios();

  useEffect(function () {
    async function getMessages() {
      try {
        const response = await http.get(url);
        setMessages(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getMessages();
    // eslint-disable-next-line
  }, []);

  if (loading)
    return (
      <Loading
        animation="border"
        variant="primary"
        classname="d-block"
        statusText="Loading messages.."
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

  messages.sort(function (date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return messages;
  });

  return (
    <Container className="messages">
      {messages.map((request) => {
        const name = request.name;
        const id = request.id;
        const email = request.email;
        const message = request.message;
        const date = request.created_at;

        function dateFormatter() {
          let formattedDate = moment(date).format("DD/MM/YYYY");
          return formattedDate;
        }

        return (
          <ListGroupItem key={id}>
            <span className="fw-bold">{dateFormatter(date)}</span>
            <Container>
              <span className="fw-bold">Name: </span>
              {name}
            </Container>
            <Container>
              <span className="fw-bold">E-mail: </span>
              {email}
            </Container>
            <Container>
              <span className="fw-bold">Message: </span>
              {message}
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
              <DeleteMessage id={id} />
            </Container>
          </ListGroupItem>
        );
      })}
    </Container>
  );
}

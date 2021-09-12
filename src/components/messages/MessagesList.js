import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import Container from "react-bootstrap/Container";
import { DeleteMessage } from "./deleteMessage";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import moment from "moment";

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
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getMessages();
    console.log(messages);
    // eslint-disable-next-line
  }, []);

  if (loading) return <span>Loading messages...</span>;

  if (error)
    return (
      <div>Sorry, something went wrong. Please contact your administrator.</div>
    );

  return (
    <Container className="messages">
      {messages.map((request) => {
        const name = request.name;
        const id = request.id;
        const email = request.email;
        const message = request.message;
        const date = request.created_at;

        function dateFormatter() {
          let formattedDate = moment(date).format("DD MMMM YYYY");
          return formattedDate;
        }

        return (
          <ListGroupItem key={id}>
            <span>{dateFormatter(date)}</span>
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
              <DeleteMessage id={id} />
            </Container>
          </ListGroupItem>
        );
      })}
    </Container>
  );
}

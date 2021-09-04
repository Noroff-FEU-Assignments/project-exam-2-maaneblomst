import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import Container from "react-bootstrap/Container";

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

        return (
          <li key={id}>
            Name:{name}, E-mail:{email}, Message: {message}
          </li>
        );
      })}
    </Container>
  );
}

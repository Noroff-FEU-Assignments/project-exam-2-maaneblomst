import { MessagesList } from "../../components/messages/MessagesList";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";

function Messages() {
  return (
    <Container>
      <Heading size="1" content="Messages" />
      <MessagesList />
    </Container>
  );
}

export default Messages;

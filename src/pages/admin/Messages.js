import { MessagesList } from "../../components/messages/MessagesList";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function Messages() {
  return (
    <Container className="content-wrapper">
      <Heading size="1" content="Messages" />
      <Row>
        <Col />
        <Col xs={12} sm={10} md={10} lg={10}>
          <ListGroup>
            <MessagesList />
          </ListGroup>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default Messages;

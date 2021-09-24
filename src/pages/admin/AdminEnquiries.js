import { EnquiriesList } from "../../components/enquiries/EnquiriesList";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function AdminEnquiries() {
  return (
    <main>
      <Container>
        <Heading size="1" content="Enquiries" />
        <Row>
          <Col />
          <Col xs={12} sm={10} md={10} lg={6}>
            <ListGroup>
              <EnquiriesList />
            </ListGroup>
          </Col>
          <Col />
        </Row>
      </Container>
    </main>
  );
}

export default AdminEnquiries;

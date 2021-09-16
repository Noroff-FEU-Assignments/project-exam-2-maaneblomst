import { EnquiriesList } from "../../components/enquiries/EnquiriesList";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function AdminEnquiries() {
  return (
    <Container>
      <Heading size="1" content="Enquiries" />
      <ListGroup>
        <EnquiriesList />
      </ListGroup>
    </Container>
  );
}

export default AdminEnquiries;

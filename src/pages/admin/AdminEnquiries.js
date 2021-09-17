import { EnquiriesList } from "../../components/enquiries/EnquiriesList";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function AdminEnquiries() {
  return (
    <Container>
      <Heading size="1" content="Enquiries" />
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Enquiries</Breadcrumb.Item>
      </Breadcrumb>
      <ListGroup>
        <EnquiriesList />
      </ListGroup>
    </Container>
  );
}

export default AdminEnquiries;

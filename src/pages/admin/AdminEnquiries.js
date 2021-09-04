import { EnquiriesList } from "../../components/enquiries/EnquiriesList";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";

function AdminEnquiries() {
  return (
    <Container>
      <Heading size="1" content="Enquiries" />
      <EnquiriesList />
    </Container>
  );
}

export default AdminEnquiries;

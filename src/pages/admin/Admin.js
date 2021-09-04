import { Link } from "react-router-dom";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";

function Admin() {
  return (
    <Container>
      <Heading size="1" content="Admin - Dashboard" />
      <Container>
        <Link to="/messages">Messages</Link>
      </Container>
      <Container>
        <Link to="/adminenquiries">Enquiries</Link>
      </Container>
      <Container>
        <Link to="/overview">Accommodations</Link>
      </Container>
    </Container>
  );
}

export default Admin;

import { Link } from "react-router-dom";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Speedometer } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Calendar } from "react-bootstrap-icons";
import { Folder, FolderPlus } from "react-bootstrap-icons";

function Admin() {
  return (
    <Container>
      <Heading size="1" content="Dashboard" />
      <Row>
        <Col xs={12} sm={6} md={6} lg={6} className="text-center">
          <Link to="/messages" className="text-dark text-decoration-none">
            <Envelope size={40}></Envelope>
            <Col>Messages</Col>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="text-center">
          <Link to="/adminenquiries" className="text-dark text-decoration-none">
            <Calendar size={40}></Calendar>
            <Col>Enquiries</Col>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="text-center">
          <Link to="/overview" className="text-dark text-decoration-none">
            <Folder size={40}></Folder>
            <Col>Accommodations</Col>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="text-center">
          <Link to="/add" className="text-dark text-decoration-none">
            <FolderPlus size={40}></FolderPlus>
            <Col>Add New</Col>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;

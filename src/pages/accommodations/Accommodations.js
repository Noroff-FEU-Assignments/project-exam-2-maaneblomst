import Heading from "../../components/common/Heading";
import { AccommodationsList } from "../../components/accommodations/AccommodationsList";
import { PopularObjects } from "../../components/accommodations/PopularObjects";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
function Accommodations() {
  return (
    <Container className="content-wrapper">
      <Heading size="1" content="Accommodations" />
      <AccommodationsList />
      <Row className="bg-light mt-5">
        <Col className="text-center p-5">
          <p className="h4">Do you have questions?</p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <Link to="/contact" className="d-block">
            <Button className="btn-lg" variant="outline-secondary">
              Get in Touch
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="bg-light">
        <PopularObjects />
      </Row>
    </Container>
  );
}

export default Accommodations;

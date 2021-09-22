import Heading from "./Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GeoAlt } from "react-bootstrap-icons";
import { Stars } from "react-bootstrap-icons";
import { Building } from "react-bootstrap-icons";

function IconGroup() {
  return (
    <Container className="mt-1 mb-5">
      <Row className="d-flex justify-content-center">
        <Col className="p-3 mt-3" xs={12} sm={10} md={4} lg={4}>
          <Container fluid>
            <GeoAlt size={70}></GeoAlt>
            <Col className="p-3">
              <Heading size="6" display="fw-bold" content="Local Knowledge" />
              <p>We take pride having Bergen's most knowledgable guides</p>
            </Col>
          </Container>
        </Col>
        <Col className="p-3 mt-3" xs={12} sm={10} md={4} lg={4}>
          <Container fluid>
            <Stars size={70}></Stars>
            <Col className="p-3">
              <Heading size="6" display="fw-bold" content="Handpicked" />
              <p>
                Each and every one of our accommodation is handpicked to give
                you an authenic experience
              </p>
            </Col>
          </Container>
        </Col>
        <Col className="p-3 mt-3" s={12} sm={10} md={4} lg={4}>
          <Container fluid>
            <Building size={70}></Building>
            <Col className="p-3">
              <Heading
                size="6"
                display="fw-bold"
                content="Building Communities"
              />
              <p>Our goal is to give back to our community.</p>
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default IconGroup;

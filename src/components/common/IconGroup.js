import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GeoAlt } from "react-bootstrap-icons";
import { Stars } from "react-bootstrap-icons";
import { Building } from "react-bootstrap-icons";

function IconGroup() {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col xs={12} sm={10} md={8} lg={4}>
          <GeoAlt size={70}></GeoAlt>
          <Col>
            <span>Local Knowledge</span>
          </Col>
        </Col>
        <Col xs={12} sm={10} md={8} lg={4}>
          <Stars size={70}></Stars>
          <Col>
            <span>Handpicked</span>
          </Col>
        </Col>
        <Col xs={12} sm={10} md={8} lg={4}>
          <Building size={70}></Building>
          <Col>
            <span>Community</span>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default IconGroup;

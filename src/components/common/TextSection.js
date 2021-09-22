import Heading from "./Heading";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { string } from "prop-types";

export function TextSectionLeft({ title, content, image }) {
  return (
    <Row className="d-flex justify-content-center">
      <Col xs={12} sm={12} md={6} lg={6}>
        <Heading size="3" content={title} />
        <Container>
          <p>{content}</p>
        </Container>
        <Container className="text-center">
          <Button variant="link">Read more</Button>
        </Container>
      </Col>
      <Col xs={12} sm={6} md={6} lg={6}>
        <Image fluid src={image} />
      </Col>
    </Row>
  );
}

export function TextSectionRight({ title, content, image }) {
  return (
    <Row className="d-flex justify-content-center">
      <Col xs={12} sm={12} md={6} lg={6}>
        <Image fluid src={image} />
      </Col>
      <Col xs={12} sm={6} md={6} lg={6} className="mt-5">
        <Heading size="3" content={title} />
        <Container>
          <p>{content}</p>
        </Container>
        <Container className="text-center">
          <Button variant="link">Read more</Button>
        </Container>
      </Col>
      <Col />
    </Row>
  );
}

TextSectionRight.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: string.isRequired,
};

TextSectionLeft.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: string.isRequired,
};

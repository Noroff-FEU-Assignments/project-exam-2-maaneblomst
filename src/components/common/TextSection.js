import Heading from "./Heading";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export function TextSectionLeft({ title, content, image }) {
  return (
    <>
      <Col xs={12} sm={12} md={6} lg={6}>
        <Heading size="3" content={title} />
        <p className="mt-4 p-2">{content}</p>
        <Container className="text-center">
          <Button variant="link">Read more</Button>
        </Container>
      </Col>
      <Col xs={12} sm={6} md={6} lg={6}>
        <Image fluid src={image} />
      </Col>
    </>
  );
}

export function TextSectionRight({ title, content, image }) {
  return (
    <>
      <Col xs={12} sm={12} md={6} lg={6}>
        <Image fluid src={image} />
      </Col>
      <Col xs={12} sm={6} md={6} lg={6}>
        <Heading size="3" content={title} />
        <p className="mt-4 p-2">{content}</p>
        <Container className="text-center">
          <Button variant="link">Read more</Button>
        </Container>
      </Col>
      <Col />
    </>
  );
}

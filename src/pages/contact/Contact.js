import ContactForm from "../../components/forms/ContactForm";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Contact() {
  return (
    <main>
      <div className="hero-image-contact mb-4"></div>
      <Container className="content-wrapper">
        <Row>
          <Heading size="1" content="Contact" />
          <Container className="text-center">
            <p className="text-muted">We'd love to hear from you!</p>
          </Container>
        </Row>
        <Row>
          <Col />
          <Col xs={12} sm={8} md={6} lg={6}>
            <Container>
              <ContactForm />
            </Container>
          </Col>
          <Col />
        </Row>
        <Container className="text-center spacer"></Container>
      </Container>
    </main>
  );
}

export default Contact;

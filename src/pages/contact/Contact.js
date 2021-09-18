import ContactForm from "../../components/forms/ContactForm";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Contact() {
  return (
    <>
      <div className="hero-image-contact mb-4"></div>
      <Container className="content-wrapper">
        <Heading size="1" content="Contact" />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </Breadcrumb>
        <ContactForm />
      </Container>
    </>
  );
}

export default Contact;

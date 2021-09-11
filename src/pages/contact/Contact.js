import ContactForm from "../../components/forms/ContactForm";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container className="content-wrapper">
      <Heading size="1" content="Contact" />
      <ContactForm />
    </Container>
  );
}

export default Contact;

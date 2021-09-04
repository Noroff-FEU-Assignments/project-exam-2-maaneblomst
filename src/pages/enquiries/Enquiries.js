import EnquiryForm from "../../components/forms/EnquiryForm";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";

function Enquiries() {
  return (
    <Container>
      <Heading size="1" content="Enquiries" />
      <EnquiryForm />
    </Container>
  );
}

export default Enquiries;

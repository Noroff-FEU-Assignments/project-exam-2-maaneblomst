import AddForm from "../../components/accommodations/AddNew";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";

function Add() {
  return (
    <Container>
      <Heading size="1" content="Add new accommodation" />
      <AddForm />
    </Container>
  );
}

export default Add;
